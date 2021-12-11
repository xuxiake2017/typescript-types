export interface Student {
  name: string;
  age: number;
}

const student1: Student = {
  name: '张三',
  age: 20
}

const student2: Pick<Student, 'name'> = {
  name: '李四'
}

const student3: Pick<Student, 'name'> = {
  name: '王五',
  age: 20
}
