import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProudctListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import { CartBar, LogoHeader, NavigationBar } from './components/Head';
import { BannerItem, BannerGroup } from './components/Banner';

const Container = styled.div`
  margin: 0 auto;
  padding-top:230px;
  width:1200px;
  position:relative;
`;

const FixedWrap = styled.div`
  position:fixed;
  top:0;
  margin:0 auto;
  z-index:999;
  width:1200px;
  background:white;
`;

function App() {
  return (
    <Container>
      <Router>
        <FixedWrap>
          <CartBar />
          <LogoHeader/>
          <NavigationBar />
        </FixedWrap>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/list/:menu_type" component={ProudctListScreen} />
        <Route path="/product/detail/:prod_idx" component={ProductDetailScreen} />
        <Route path="/cart" component={CartScreen} />
      </Router>
    </Container>
  );
}

export default App;
