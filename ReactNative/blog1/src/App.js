/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파운데이션 추천']);
  /* var [a,b] = [10, 100]; destructuring 문법: 10,100을 변수 a,b에 담기 */
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] = '여성 코트 추천';
    글제목변경( newArray );
  } 

  
  return (
    <div className="App">
      <div className="black-nav">
        <div style= { { color : 'blue', fontSize : '30px'} }>개발 Blog</div>
      </div>
      <button onClick={제목변경}>글제목 변경 버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 21일 발행</p>
        <hr/>
      </div>

      {/*<h4> { posts } </h4> 
      데이터바인딩함수 {변수명 또는 함수명} 
  <img src={logo}/> 이미지 가져올 때 import 해와서 이름 가져오기 */}
    </div>
  );
}

export default App;