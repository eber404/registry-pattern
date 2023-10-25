import { buildApp } from '@/infra/settings/app-builder'
import { GetUserController } from '@/infra/controllers/get-user-controller'

async function main() {
  buildApp()
  const controller = new GetUserController()
  const user = await controller.handle({ id: 'abc' })
  console.log(user)
}

main()
