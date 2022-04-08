import { BehaviorSubject, Observable } from "rxjs";
import { SignInRequest } from "../models/SignInRequest/SignInRequest";
import { User } from "../models/User/User";

export interface IAuthService {
  isLoggedIn$: BehaviorSubject<boolean>;

  isAttempting$: BehaviorSubject<boolean>;

  attempt(signInRequest: SignInRequest): Observable<User>;

  logout(): void;
}
