import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({loginState, setLoginState}) => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const navigate = useNavigate();

    const goToLogin = () => {
        if(loginState=='로그인') {
            navigate('/login');
            
        } else if (loginState=='로그아웃') {
            setLoginState('로그인');
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    const search = (event) => {
        if (event.key === "Enter") {
            console.log("we click this key,", event.key);
            // 입력한 검색어를 읽어와서 url 바꾸기
            let keyword = event.target.value;
            console.log('keyword : ', keyword);
            navigate(`/?q=${keyword}`)
        }
    };

  return (
    <div>

        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} />
                <div onClick={goToLogin}>{loginState}</div>
            </div>
        </div>


        <div className='nav-section' onClick={goToHome}>
            <img width={80} src='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg'/>
        </div>

        <div className='search-box'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} />
            <input className='search' type='text' placeholder='제품검색' onKeyPress={(event) => search(event)}/>
        </div>
        
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu) =>(<li>{menu}</li>))}
            </ul>
        </div>

       
    </div>
  )
}

export default Navbar