import {
  SIGNIN,
  SIGNUP,
  CODE,
  FORGET_PASSWORD,
  CHANGE_PASSWORD,
} from "../../src/constants/ActionTypes";

function reducer(state, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        signIn: true,
        signUp: false,
        code: false,
        forgetPassword: false,
        changePassword: false,
      };
    case SIGNUP:
      return {
        signIn: false,
        signUp: true,
        code: false,
        forgetPassword: false,
        changePassword: false,
      };
    case CODE:
      return {
        signIn: false,
        signUp: false,
        code: true,
        forgetPassword: false,
        changePassword: false,
      };
    case FORGET_PASSWORD:
      return {
        signIn: false,
        signUp: false,
        code: false,
        forgetPassword: true,
        changePassword: false,
      };
    case CHANGE_PASSWORD:
      return {
        signIn: false,
        signUp: false,
        code: false,
        forgetPassword: false,
        changePassword: true,
      };

    default:
        return{
            signIn: false,
            signUp: false,
            code: false,
            forgetPassword: false,
            changePassword: false,
        }
  }
}
export default reducer
