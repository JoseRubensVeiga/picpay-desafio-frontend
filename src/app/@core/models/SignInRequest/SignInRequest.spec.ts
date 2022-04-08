import { ISignInRequest, SignInRequest } from "./SignInRequest";

describe("SignInRequest", () => {
  let iSignInRequest: ISignInRequest;

  beforeEach(() => {
    iSignInRequest = {
      email: "example@email.com",
      password: "12345",
    };
  });

  it("should create a SignInRequest instance", () => {
    const restorePass = new SignInRequest(iSignInRequest);

    expect(restorePass).toBeInstanceOf(SignInRequest);
  });
});
