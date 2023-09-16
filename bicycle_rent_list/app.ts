import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined {
        return this.users.find(user => user.email === email)
    }

    registerUser(user: User): void {
        for (const userToRegister of this.users) {
            if (userToRegister.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }


    registerBike(bike: Bike): void {
        for (const rBike of this.bikes) {
            if (rBike.name === bike.name) {
                throw new Error('Duplicate bike.')
            }
        }
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }


    removeUser(userEmail: string): void {
        for (let elementIndex = 0; elementIndex < this.users.length; elementIndex++) {
            if (userEmail === this.users[elementIndex].email) {
                this.users.splice(elementIndex, 1)
            }
        }
    }


    rentBike(user: User, bike: Bike, dateFrom: Date, dateTo: Date) {
        const toRent = Rent.create(this.rents, bike, user, dateFrom, dateTo)

        if (toRent) {
            this.rents.push(toRent)
        }
    }


    bikeReturn(userEmail: string, dateFrom: Date, dateTo: Date, dateReturned: Date) {
        for (let rentIndex = 0; rentIndex < this.rents.length; rentIndex++) {
            if (userEmail === this.rents[rentIndex].user.email &&
                dateFrom === this.rents[rentIndex].dateFrom &&
                dateTo === this.rents[rentIndex].dateTo) {
                this.rents[rentIndex].dateReturned = dateReturned
            }
        }
    }
}