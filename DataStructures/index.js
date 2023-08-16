"use strict";
class Student {
    firstName;
    lastName;
    tardy;
    scores;
    constructor(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.tardy = 0;
        this.scores = [];
    }
    fullName() {
        return `Fullname: ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardy++;
        return `${this.firstName} had been late ${this.tardy} times`;
    }
    addScore(score) {
        this.scores.push(score);
        if (this.scores.length === 0) {
            return 0;
        }
        return this.scores.reduce((prev, curr) => prev + curr) / this.scores.length;
    }
    static EnrollStudent() {
        return 'ENROLLING STUDENTS';
    }
}
// console.log(Student.EnrollStudent());
// The this keyword in a class refers to the object created from that class
