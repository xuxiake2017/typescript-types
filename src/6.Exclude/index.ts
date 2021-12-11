export type PersonAttr = 'name' | 'age'

export type StudentAttr = 'name' | 'age' | 'class' | 'school'

const student1: Exclude<StudentAttr, PersonAttr>