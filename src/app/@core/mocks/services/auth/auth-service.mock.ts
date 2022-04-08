import faker from "@faker-js/faker";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IAuthService } from "../../../interfaces/IAuthService";
import { SignInRequest } from "../../../models/SignInRequest/SignInRequest";
import { User } from "../../../models/User/User";

export class AuthServiceMock implements IAuthService {
  isLoggedIn$ = new BehaviorSubject(false);
  isAttempting$ = new BehaviorSubject(false);

  attempt(signInRequest: SignInRequest): Observable<User> {
    return of(
      new User({
        id: 0,
        email: faker.internet.email(),
        name: faker.name.firstName(),
        password: `${faker.random.word()}${faker.finance.amount(1, 100)}`,
      })
    );
  }

  logout(): void {}
}
