import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { delay, finalize, pluck, switchMap, tap } from "rxjs/operators";

import endpoints from "src/environments/endpoints";
import { IAuthService } from "../../interfaces/IAuthService";
import { SignInRequest } from "../../models/SignInRequest";
import { IUser, User } from "../../models/User";
import { mapToClass } from "../../operators/mapToClass";

@Injectable({ providedIn: "root" })
export class AuthService implements IAuthService {
  isLoggedIn$ = new BehaviorSubject(this.getIsLoggedInFromLocalStorage());

  isAttempting$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  attempt(signInRequest: SignInRequest): Observable<User> {
    const url = endpoints.account;
    const params = {
      email: signInRequest.email,
      password: signInRequest.password,
    };

    this.isAttempting$.next(true);

    return this.http.get<IUser[]>(url, { params }).pipe(
      pluck(0),
      switchMap(
        (result) =>
          result ? of(result) : throwError("Nenhum usuário encontrado") // simula o Bad Request do servidor caso não encontra o usuário
      ),
      mapToClass(User),
      delay(2000),
      tap(() => this.setLoggedIn(true)),
      finalize(() => this.isAttempting$.next(false))
    );
  }

  logout(): void {
    this.setLoggedIn(false);
  }

  private setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn$.next(isLoggedIn);
    localStorage.setItem("PIC_PAY_LOGGED_IN", JSON.stringify(isLoggedIn));
  }

  private getIsLoggedInFromLocalStorage(): boolean {
    const isLoggedInString = localStorage.getItem("PIC_PAY_LOGGED_IN");

    if (!isLoggedInString) {
      return false;
    }

    try {
      const isLoggedIn = JSON.parse(isLoggedInString);

      return isLoggedIn;
    } catch {
      return false;
    }
  }
}
