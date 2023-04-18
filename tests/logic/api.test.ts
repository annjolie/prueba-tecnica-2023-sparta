import { loginHandler } from '../../src/logic/api';
// este es el mock de la funcion uuidv4 que se encarga de generar un uuid y se usa en la funcion loginHandler
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
