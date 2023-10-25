import { Container, decorate, injectable } from 'inversify'
import { Class } from 'utility-types'

class SingletonRegistry {
  private container = new Container()
  private static _instance: SingletonRegistry
  private constructor() {}

  static getInstance() {
    if (!this._instance) {
      this._instance = new SingletonRegistry()
    }
    return this._instance
  }

  public register(abstract: any, implementation: Class<unknown>) {
    const dependency = implementation as Class<typeof abstract>
    type T = typeof abstract

    if (!this.container.isBound(dependency)) {
      decorate(injectable(), dependency)
      this.container.bind<T>(abstract as Class<T>).to(dependency)
    }
  }

  public get<T>(abstract: any): T {
    return this.container.get(abstract as Class<T>)
  }
}

export const Registry = Object.freeze(SingletonRegistry.getInstance())

type AbstractConstructorHelper<T> = (new (...args: any) => {
  [x: string]: any
}) &
  T
