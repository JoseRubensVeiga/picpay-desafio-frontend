import { IUser, User } from "./User";

describe("User", () => {
  let iUser: IUser;

  beforeEach(() => {
    iUser = {
      id: 0,
      email: "",
      name: "",
      password: "",
    };
  });

  it("should create a User instance", () => {
    const restorePass = new User(iUser);

    expect(restorePass).toBeInstanceOf(User);
  });
});
