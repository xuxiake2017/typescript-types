export interface Student {
  name: string;
  age: number;
}

const student1: Student = {
  name: '张三',
  age: 20
}
student1.age = 21

const student2: Readonly<Student> = {
  name: '李四',
  age: 20
}
student2.age = 21