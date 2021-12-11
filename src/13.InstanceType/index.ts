const Student = class {
  name: string;
  age: number;
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
  showInfo () {
    console.log('name: ', this.name, 'age: ', this.age);
  }
}

const student1: InstanceType<typeof Student> = new Student('张三', 20)
