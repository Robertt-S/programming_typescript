export class DuplicatedUserError extends Error {
  public readonly name = 'DuplicatedUser'

  constructor() {
      super('Duplicated User!')
  }
}