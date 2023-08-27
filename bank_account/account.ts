import { Holder } from "./holder";

class Conta {
    balance: number = 0.0
    ID: string
    owner: Holder

    constructor(ID: string, owner: Holder) {
        this.ID = ID
        this.owner = owner
    }

    credit(amount: number):void {
        this.balance = this.balance + amount
    }
    debita(amount: number):void {
        this.balance = this.balance - amount
    }
}

const karpov = new Holder("Karpov", "42-22-33")
const karpovAccount = new Conta("31415", karpov)
karpovAccount.credit(100.0)

console.log(karpovAccount.balance)