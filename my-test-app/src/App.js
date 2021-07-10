import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import EffectExampleScreen from './screen/EffectExampleScreen';
import InputValidationScreen from './screen/InputValidationScreen';

// styled-components
// const Box = styled.div`
//   width:300px;
//   height:300px;
//   color:gray;
//   background:yellow;
// `;

// 함수형 컴포넌트
function App() {
  // const headerStyle = {
  //   background:"red",
  // };
  // const boxStyle = {
  //   display:"inline-block",
  //   width:"200px",
  //   height:"200px",
  //   background:"purple"
  // };

  return (
    // <div className="App">
    //   <header className="App-header" style={headerStyle}>
    //     <div style={boxStyle}>BOX</div>
    //     <Box>BOX</Box>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       aaaaaaa <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    // 라우터 설정
    // "/" 경로가 속한 요청이 있으면 HomeScreen을 함께 렌더링하기 때문에 
    // exact설정 값을 넣어서 정확히 일치하는 경로의 스크린만 렌더링 할 수 있도록 지정한다
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/detail" component={DetailScreen} />
      <Route path="/effect" component={EffectExampleScreen} />
      <Route path="/input" component={InputValidationScreen} />
    </Router>
  );
}

// 별도로 분리된 파일에서 하나의 값을 내보내기 할 때 사용
export default App;
