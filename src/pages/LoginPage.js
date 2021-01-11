import React from 'react';

const LoginContainer = () => {
    return (
        <div style={{background: 'red', padding:'20px', width:'500px', height:'500px', display: 'flex', flexDirection: 'column'}}>
            <div style={{marginLeft:'auto', marginRight:'auto', padding:'20px'}}>Reacters</div>
            <div>로그인</div>
            <div>아이디</div>
            <div>비밀번호</div>
            <button>로그인</button>
            <div>회원가입</div>

        </div>
    )
}
const LoginPage = () => {
    return (
        <div style={{background: 'yellow', display: 'flex',   height: '1200px', justifyContent:'center', alignItems:'center'}}>
            <LoginContainer>
                

            </LoginContainer>
                
        </div>
    )
}

export default LoginPage