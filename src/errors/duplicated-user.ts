export class DupicatedUser extends Error {
  public readonly name = 'DuplicatedUser'

  constructor() {
      super('Duplicated User!')
  }
}