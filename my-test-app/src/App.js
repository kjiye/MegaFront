import logo from './logo.svg';
import './App.css'; // 분리된 css 파일을 불러오는 경우
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailScreen from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';

function App() {
  // 태그에 직접 스타일 속성을 적용하는 경우 (인라인 스타일 방식)
  const tempStyle = {
    display:"inline-block",
    width:"200px",
    height:"200px",
    background:"purple",
  };
    
  return (
    <>
    {/* <div className="App">
      <header className="App-header" style={{"backgroundColor": "antiquewhite"}}>
        <div style={tempStyle}>box</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </header>
    </div> */}
    {/* 라우터 설정하기 */}
    {/* "/" 경로가 속한 라우터를 모두 불러오기 때문에 exact 설정값을 넣어서 정확히 일치하는 경로의 스크린만 렌더링 하는 것으로 지정한다 */}
    <Router>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/detail' component={DetailScreen} />
    </Router>
    </>
  );
}

// 분리되어 있는 파일에서 하나의 값을 모듈로 내보내기
export default App;
