import { loginHandler } from '../../src/logic/api';

// Mock the uuidv4 function to always return a specific UUID
jest.mock('uuid', () => ({
  v4: () => 'mock-uuid'
}));

describe('loginHandler', () => {
  it('returns a token with a UUID', async () => {
    const result = await loginHandler();
    expect(result).toEqual({ token: 'mock-uuid' });
  });
});
