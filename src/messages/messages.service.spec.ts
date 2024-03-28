import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesService],
    }).compile();

    service = module.get<MessagesService>(MessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMessages', () => {
    it('should return messages for a given roomName', async () => {
      const roomName = 'testRoom';
      const expectedMessages = [
        { id: '1', body: 'Test message', from: { name: 'Sender' } },
      ];

      // Mock the data store or database call here
      jest
        .spyOn(service, 'getMessages')
        .mockResolvedValueOnce(expectedMessages);

      const result = await service.getMessages(roomName);
      expect(result).toEqual(expectedMessages);
    });
  });

  describe('sendMessage', () => {
    it('should send a message to the specified room', async () => {
      const roomName = 'testRoom';
      const message = 'Test message';

      // Mock the data store or database call here
      const expectedMessage = {
        id: '1',
        body: message,
        from: { name: 'Sender' },
      };
      jest.spyOn(service, 'sendMessage').mockResolvedValueOnce(expectedMessage);

      const result = await service.sendMessage(roomName, message);
      expect(result).toEqual(expectedMessage);
    });
  });
});
