export interface Student {
  name: string;
  age: number;
}

export interface StudentConstructor {
  new (name: string, age: number): Student
}

const student1: ConstructorParameters<StudentConstructor>