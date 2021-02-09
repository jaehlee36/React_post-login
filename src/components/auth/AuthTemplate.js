import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 회원가입/로그인 페이지의 레이아웃 담당
const AuthTemplateBlock = styled.div`
  background: gray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    text-align: center;
    padding-bottom: 2rem;
    letter-spacing: 2px;
    font-weight: bold;
  }
  background: white;
  width: 360px;
  padding: 2rem;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/" style={{ textDecoration: "none" }}>
            Reacters
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
