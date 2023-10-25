import { GetUser } from '@/application/usecases/get-user'
import { UserRepository } from '@/domain/repositories/user-repository'
import { FakeUserRepository } from '@/infra/repositories/faker-user-repository'

import { Registry } from '@/registry'

export function buildApp() {
  // DI
  Registry.register(UserRepository, FakeUserRepository)
  Registry.register(GetUser, GetUser)
}
