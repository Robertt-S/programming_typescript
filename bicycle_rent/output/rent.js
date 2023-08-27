"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
var Rent = /** @class */ (function () {
    function Rent(person, bicycle, rentInitialDate, rentLastDate) {
        this.rentDays = 0.0;
        this.bill = 0.0;
        this.person = person;
        this.bicycle = bicycle;
        this.rentInitialDate = rentInitialDate;
        this.rentLastDate = rentLastDate;
    }
    Rent.prototype.getRentDays = function () {
        var MILLISECONDSTODAYS = 86400000;
        this.rentDays = this.rentLastDate.getTime() - this.rentInitialDate.getTime();
        this.rentDays = Math.ceil(this.rentDays / MILLISECONDSTODAYS);
    };
    Rent.prototype.getBill = function () {
        this.bill = (this.rentDays * this.bicycle.dayRentValue) + this.bicycle.dayRentValue;
    };
    return Rent;
}());
exports.Rent = Rent;
