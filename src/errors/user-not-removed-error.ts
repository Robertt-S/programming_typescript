export class UserNotRemoved extends Error {
  public readonly name = 'UserNotRemoved'

  constructor() {
      super('User not removed!')
  }
}