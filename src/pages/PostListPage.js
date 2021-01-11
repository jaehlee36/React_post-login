import React from 'react';
import Button from '../components/common/Button';

const LoginButton = () => {
    return (
        <button>로그인</button>
    )
}

const PostListPage = (props) => {
    console.log(props);
    return (
        <div style={{display:'flex', padding:'20px', borderBottom:'1px solid black'}}>
            <div>REACTERS</div>
            <div style={{marginLeft: 'auto'}}>
                tester
                <Button>버튼</Button>
            </div>
        </div>
    )
}

export default PostListPage