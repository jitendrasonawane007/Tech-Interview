const service = require("../services/user.services");

/**
 * Though not using spy on function as user service has simple interface
 */
describe(`Test user api functions`, () => {
  it(`Test user credentials if empty`, () => {
    const message = service.checkIfUserValid();
    expect(message).toEqual(service.CRED_EMPTY_EXPECTED_MSG);
  });

  it(`Test correct user credentials`, () => {
    const mockParams = {
      userName: "test user",
      password: "testpassword",
    };

    const message = service.checkIfUserValid(
      mockParams.userName,
      mockParams.password
    );
    expect(message).toEqual(service.USER_FOUND_MSG);
  });

  it(`Test incorrect user credentials`, () => {
    const mockParams = {
      userName: "test user345",
      password: "testpassword",
    };

    const message = service.checkIfUserValid(
      mockParams.userName,
      mockParams.password
    );
    expect(message).toEqual(service.USER_NOT_FOUND_MSG);
  });
});
