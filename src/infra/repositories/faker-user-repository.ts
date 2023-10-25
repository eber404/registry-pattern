import { User } from '@/domain/entities/user'
import { UserRepository } from '@/domain/repositories/user-repository'

export class FakeUserRepository implements UserRepository {
  async get(id: string): Promise<User> {
    return Promise.resolve(new User(id))
  }
}
