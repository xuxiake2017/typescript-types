export type PersonAttr = 'name' | 'age'

export type StudentAttr = 'name' | 'age' | 'class' | 'school'

const student1: Extract<StudentAttr, PersonAttr>