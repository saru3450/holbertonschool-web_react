// Définir l'interface Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// 2.Extending the teacher class

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3.printing teachers 

interface printTeacherfunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherfunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// 4.writing a class

interface Studentclass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string; 
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): Studentclass;
}

class StudentClassImpl implements Studentclass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: Studentclass = new StudentClassImpl("Alice", "Dupont");
console.log(student.displayName());
console.log(student.workOnHomework());




