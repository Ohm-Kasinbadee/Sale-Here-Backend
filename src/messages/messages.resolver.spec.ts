import { Test, TestingModule } from '@nestjs/testing';
import { MessagesResolver } from './messages.resolver';
import { MessagesService } from './messages.service';

describe('MessagesResolver', () => {
  let resolver: MessagesResolver;
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesResolver, MessagesService],
    }).compile();

    resolver = module.get<MessagesResolver>(MessagesResolver);
    service = module.get<MessagesService>(MessagesService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('messages', () => {
    it('should return messages for a given roomName', async () => {
      const roomName = 'testRoom';
      const expectedMessages = [
        { id: '1', body: 'Test message', from: { name: 'Sender' } },
      ];

      jest
        .spyOn(service, 'getMessages')
        .mockResolvedValueOnce(expectedMessages);

      const result = await resolver.messages(roomName);
      expect(result).toEqual(expectedMessages);
    });
  });

  describe('sendMessage', () => {
    it('should send a message to the specified room', async () => {
      const roomName = 'testRoom';
      const message = 'Test message';

      jest.spyOn(service, 'sendMessage').mockResolvedValueOnce({
        id: '1',
        body: message,
        from: { name: 'Sender' },
      });

      const result = await resolver.sendMessage(roomName, message);
      expect(result).toEqual({ successful: true });
    });
  });
});
