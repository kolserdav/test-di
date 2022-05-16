const user = (constr: Function) => {
  constr.prototype.changeName = function(newName: string) {
    this.name = newName;
  }
}

@user
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const u = new User('Ivan');
(<any>u).changeName('Vania');

console.log(u)