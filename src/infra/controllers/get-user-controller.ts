import { GetUser } from '@/application/usecases/get-user'
import { Registry } from '@/registry'

export class GetUserController {
  private readonly getUserUseCase = Registry.get<GetUser>(GetUser)

  async handle(input: Input) {
    return this.getUserUseCase.excute({ id: input.id })
  }
}

type Input = {
  id: string
}
