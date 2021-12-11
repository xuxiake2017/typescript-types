export interface Student {
  name: string;
  age: number;
  class: string;
  school: string;
}

export type PersonAttr = 'name' | 'age'

export type StudentAttr = 'name' | 'age' | 'class' | 'school'

const student1: Omit<Student, PersonAttr> = {}