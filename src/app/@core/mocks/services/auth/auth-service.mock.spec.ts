import { SignInRequest } from "src/app/@core/models/SignInRequest/SignInRequest";
import { User } from "src/app/@core/models/User/User";
import { AuthServiceMock } from "./auth-service.mock";

describe("AuthServiceMock", () => {
  let service = new AuthServiceMock();

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call logout once", () => {
    const spy = spyOn(service, "logout").and.callThrough();

    service.logout();

    expect(spy).toHaveBeenCalled();
  });

  it("should call attempt method and return a observable of User", (done) => {
    const signInAttempt = new SignInRequest({
      email: "",
      password: "",
    });

    const result$ = service.attempt(signInAttempt);

    result$.subscribe((user) => {
      expect(user).toBeInstanceOf(User);

      done();
    });
  });
});
