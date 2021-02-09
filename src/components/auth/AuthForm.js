import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";

// import AutoTemplate from './AutoTemplate'

// 회원가입/로그인 폼 보여줌
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: gray;
    margin-bottom: 1rem;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  background: #ffaa3a;
  color: white;
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  width: 100%;
  color: red;
  margin-bottom: 1rem;
`;
const Footer = styled.div`
  color: green;
  margin-top: 2rem;
  padding: 1rem;
  text-align: right;
`;

const AuthForm = ({ type }) => {
  return (
    <AuthFormBlock>
      <h3>{type === "login" ? "로그인" : "회원가입"}</h3>
      <form>
        <StyledInput
          placeholder="아이디"
          name="username"
          autoComplete="username"
        ></StyledInput>
        <StyledInput
          type="password"
          placeholder="비밀번호"
          name="password"
          autoComplete="new-password"
        ></StyledInput>
        {type === "register" && (
          <StyledInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호확인"
            autoComplete="new-password"
          ></StyledInput>
        )}
        <StyledButton>
          {type === "register" ? "회원가입" : "로그인"}
        </StyledButton>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
