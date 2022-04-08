export interface ISignInRequest {
  email: string;
  password: string;
}

export class SignInRequest {
  email: string;
  password: string;

  constructor(data: ISignInRequest) {
    this.email = data.email;
    this.password = data.password;
  }
}
