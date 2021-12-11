export interface Student {
  name: string;
  age: number;
}

const student1: NonNullable<Student | undefined | null> = null