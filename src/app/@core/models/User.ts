export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
