import { User } from '@/domain/entities/user'

export abstract class UserRepository {
  abstract get(id: string): Promise<User>
}
