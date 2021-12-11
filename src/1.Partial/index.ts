export interface Student {
  name: string;
  age: number;
}

const student1: Student = {}

const student2: Partial<Student> = {}