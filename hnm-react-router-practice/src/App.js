import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import { useSelector } from 'react-redux';

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1-1. 상단 네비게이션바 만들기
// 2. 전체 상품 페이지 - 전체 상품의 목록
// 3. 로그인 페이지 - 로그인 버튼
// 4. 상품 상세 페이지를 클릭하였으나, 로그인이 안되어 있다면 로그인 페이지 먼저 출력
// 5. 로그인이 되어 있을 경우 상품 상세 페이지 확인 가능
// 6. 로그아웃 버튼 클릭 시 로그아웃 기능 활성화
// 7. 로그아웃이 되면 상품 상세 페이지를 볼 수 없게 되며 로그인 페이지 출력
// 8. 로그인을 하면 로그아웃 버튼이 보이고, 로그아웃을 하면 로그인 버튼 출력
// 9. 상품 검색 기능

function App() {

  //const productList = useSelector(state => state.product.productList);
  const authenticate = useSelector(state => state.auth.authenticate); // true: 로그인 성공, false: 로그인 실패
  const [loginState, setLoginState] = useState('로그인'); 

  useEffect(()=>{
    console.log("Aaaa",authenticate);
  },[authenticate]);

  return (
    <div>
      <Navbar loginState={loginState} setLoginState={setLoginState} />

      <Routes>
        <Route path='/' element={<ProductAll />}></Route>
        <Route path='/login' element={<Login setLoginState={setLoginState}/> }></Route>
        <Route path='/product/:id' element={<PrivateRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
