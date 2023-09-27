export class UserDoesntExist extends Error {
  public readonly name = 'UserDoesntExist'

  constructor() {
      super("User doesn't exist!")
  }
}