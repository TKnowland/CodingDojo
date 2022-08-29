class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, hobbies = []) {
        //super calls the constructor of the parent class, and inherits all class methods of the parent class
        super(firstName, lastName)
        this.hobbies = hobbies;
    }

    showHobbies() {
        for(let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, lecturesTaught) {
        super(firstName, lastName)
        this.lecturesTaught = lecturesTaught;
    }
}


class Lecture {
    constructor(topic, zoomLink, capacity, teacher, roster = []) {
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.capacity = capacity;
        this.teacher = teacher;
        this.roster = roster;
    }

    createAttendanceList() {
        const fullNames = []

        for (let i = 0; i < this.roster.length; i++){
            const student = this.roster[i]
            fullNames.push(student.fullName())
        }
    }
}

// const spensir = new Person("Spensir", "Fields")
// console.log(spensir.fullName())