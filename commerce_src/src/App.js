import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProudctListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import { CartBar, LogoHeader, NavigationBar } from './components/Head';
import { BannerItem, BannerGroup } from './components/Banner';
import ProductListScreen from './screens/ProductListScreen';
import { useState } from 'react';

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

  const [cartQty, setCartQty] = useState(0);

  const cartQtyUp = (qty) => {
    setCartQty(cartQty + qty);
  };

  const cartQtyDown = (qty) => {
    setCartQty(cartQty - qty);
  };

  return (
    <Container>
      <Router>
        <FixedWrap>
          <CartBar total={cartQty} />
          <LogoHeader/>
          <NavigationBar />
        </FixedWrap>
        {/* <Route path="/" component={HomeScreen} exact /> */}
        <Route path="/" component={() => <HomeScreen cartQtyUp={cartQtyUp}/>} exact />
        {/* <Route path="/product/list/:menu_type" component={ProudctListScreen} /> */}
        <Route path="/product/list/:menu_type" component={() => <ProductListScreen cartQtyUp={cartQtyUp}/>} />
        {/* <Route path="/product/detail/:prod_idx" component={ProductDetailScreen} /> */}
        <Route path="/product/detail/:prod_idx" component={() => <ProductDetailScreen cartQtyUp={cartQtyUp}/>} />
        <Route path="/cart" component={() => <CartScreen cartQtyUp={cartQtyUp} cartQtyDown={cartQtyDown}/>} />
      </Router>
    </Container>
  );
}

export default App;
