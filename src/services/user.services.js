const userCredentials = [
  {
    userName: "test user",
    password: "testpassword",
  },
  {
    userName: "test user 2",
    password: "test pass",
  },
];

const USER_FOUND_MSG = "User Found...!!";
const USER_NOT_FOUND_MSG = "User Not Found....!!!";
const CRED_EMPTY_EXPECTED_MSG = "Enter valid user name and password";

exports.checkIfUserValid = (userName, password) => {
  let message;
  try {
    if (!userName && !password) {
      message = CRED_EMPTY_EXPECTED_MSG;
    } else {
      const user = userCredentials.find(
        (record) => record.userName === userName && record.password === password
      );
      if (user) {
        message = USER_FOUND_MSG;
      } else {
        message = USER_NOT_FOUND_MSG;
      }
    }
    return message;
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

exports.USER_FOUND_MSG = USER_FOUND_MSG;
exports.USER_NOT_FOUND_MSG = USER_NOT_FOUND_MSG;
exports.CRED_EMPTY_EXPECTED_MSG = CRED_EMPTY_EXPECTED_MSG;
