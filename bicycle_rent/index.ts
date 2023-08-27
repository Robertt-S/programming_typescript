import { Rent } from "./rent"
import { Bicycle } from "./bicycle"
import { Person } from "./person"


let personID = "40028922"
let personName = "Julia"

let bicycleID = "42424242"
let dayRentValue = 10
let rentInitialDate = new Date(2023, 8, 1)
let rentLastDate = new Date(2023, 8, 10)

const person = new Person(personID, personName)
const bicycle = new Bicycle(bicycleID, dayRentValue)

const rent1 = new Rent(person, bicycle, rentInitialDate, rentLastDate)


rent1.getRentDays()
rent1.getBill()

console.log("days rented: ", rent1.rentDays + 1)
console.log("bill: ", rent1.bill)
