export interface Student {
  name: string;
  age: number;
}

export interface StudentFunc {
  (name: string, age: number): Student
}

const student1: ReturnType<StudentFunc> = {}