import { Bicycle } from "./bicycle"
import { Person } from "./person"

export class Rent {
  person: Person
  bicycle: Bicycle

  rentInitialDate: Date
  rentLastDate: Date
  
  rentDays: number = 0.0
  bill: number = 0.0


  constructor(person: Person, bicycle: Bicycle, rentInitialDate: Date, rentLastDate: Date) {
    this.person = person
    this.bicycle = bicycle

    this.rentInitialDate = rentInitialDate
    this.rentLastDate = rentLastDate
  }


  getRentDays () {
    const MILLISECONDSTODAYS = 86400000
    
    this.rentDays = this.rentLastDate.getTime() - this.rentInitialDate.getTime()
    this.rentDays = Math.ceil(this.rentDays / MILLISECONDSTODAYS)
  }

  getBill() {
    this.bill = (this.rentDays * this.bicycle.dayRentValue) + this.bicycle.dayRentValue
  }

}