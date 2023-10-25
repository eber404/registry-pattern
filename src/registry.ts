import { Class } from 'utility-types'

class SingletonRegistry {
  private container: Record<any, unknown> = {}
  private static _instance: SingletonRegistry
  private constructor() {}

  static getInstance() {
    if (!this._instance) {
      this._instance = new SingletonRegistry()
    }
    return this._instance
  }

  public register<T>(abstract: any, implementation: Class<T>) {
    this.container[abstract] = new implementation()
  }

  public get<T>(abstract: any): T {
    return this.container[abstract] as T
  }
}

export const Registry = Object.freeze(SingletonRegistry.getInstance())
