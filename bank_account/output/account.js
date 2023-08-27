"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var holder_1 = require("./holder");
var Conta = /** @class */ (function () {
    function Conta(ID, owner) {
        this.balance = 0.0;
        this.ID = ID;
        this.owner = owner;
    }
    Conta.prototype.credit = function (amount) {
        this.balance = this.balance + amount;
    };
    Conta.prototype.debita = function (amount) {
        this.balance = this.balance - amount;
    };
    return Conta;
}());
var karpov = new holder_1.Holder("Karpov", "42-22-33");
var karpovAccount = new Conta("31415", karpov);
karpovAccount.credit(100.0);
console.log(karpovAccount.balance);
