import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// StrctMode는 해당 태그가 감싸고 있는 App 내의 문제사항을 감지하는 역할. UI에 영향을 끼치지 않는다

// React에서 모든 컴포넌트는 render() 메서드에 전달되어야만 화면에 표시된다
// index.html의 root 아이디를 가진 요소에 App 컴포넌트를 렌더링한다
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 성능관리용 기능
// 활용 원할 시 위의 주석과 같이 콘솔을 주입해서 사용
reportWebVitals();
