
abstract class Person {
    protected _personName!: string;
    protected _personAddress!: string;
    protected _personPhone!: number;
    protected _personEmail!: string;

    set personName(personName: string) {
        this._personName = personName
    }
    get personName(): string {
        return this._personName
    }

    toString(): string {
        return ` person name: ${this.personName}`
    }

    constructor(personName: string) {
        this.personName = personName
    }
}

const enum Status {
    SENIOR,
    JUNIOR,
    SOPHOMORE,
    FRESHMAN,
}
class Student extends Person {
    status!: Status;
    toString(): string {
        return ` student name: ${this.personName}`
    }
}

class Employee extends Person {
    private office!: string;
    salary!: number;
    date_hired!: string;
    toString(): string {
        return ` employee name: ${this.personName}`
    }
}

class Faculty extends Employee {
    office_hours!: number;
    rank!: string;
    toString(): string {
        return ` faculty member name: ${this.personName}`

    }
}
class Staff extends Employee {
    title!: string;
    toString(): string {
        return `staff member name: ${this.personName}`
    }
}