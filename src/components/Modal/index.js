import React, { useContext } from "react";
import SignInModal from "./signInModal";
import LogInModal from "./logInModal";
import CodeModal from "./CodeModal";
import ForgetPasswordModal from "./ForgetPasswordModal";
import ChangePasswordModal from "./ChangePasswordModal";
import { LoginContext } from "../../contexts/LoginContext";
export default function Index() {
  const { state } = useContext(LoginContext);
  return (
    <>
      {state.signIn ? <SignInModal /> : ""}
      {state.signUp ? <LogInModal /> : ""}
      {state.forgetPassword ? <ForgetPasswordModal /> : ""}
      {state.changePassword ? <ChangePasswordModal /> : ""}
      {state.code ? <CodeModal /> : ""}
    </>
  );
}
