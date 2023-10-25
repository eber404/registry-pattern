import { UserRepository } from '@/domain/repositories/user-repository'
import { Registry } from '@/registry'

export class GetUser {
  private readonly userRepository = Registry.get<UserRepository>(UserRepository)

  async excute(input: { id: string }) {
    const user = await this.userRepository.get(input.id)
    return user
  }
}
