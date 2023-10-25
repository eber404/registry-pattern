import 'reflect-metadata'
import { Registry } from './registry'

class User {
  constructor(public id: string) {}
}

abstract class UserRepository {
  abstract get(id: string): Promise<User>
}

export class FakeUserRepository implements UserRepository {
  async get(id: string): Promise<User> {
    return Promise.resolve(new User(id))
  }
}

export class GetUser {
  private readonly userRepository: UserRepository = Registry.get(UserRepository)

  async excute(input: { id: string }) {
    const user = await this.userRepository.get(input.id)
    return user
  }
}

async function main() {
  const usecase = new GetUser()
  const user = await usecase.excute({ id: 'abc' })
  console.log(user)
}

Registry.register(UserRepository, FakeUserRepository)

main()
