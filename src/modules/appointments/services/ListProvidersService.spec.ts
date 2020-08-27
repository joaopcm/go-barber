import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Di',
      email: 'john.di@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'John Wou',
      email: 'john.wou@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute(loggedUser.id);

    expect(providers).toEqual([user1, user2]);
  });
});
