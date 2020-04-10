import React from 'react';
import styled from 'styled-components';
import HeroBanner from './Components/HeroBanner';
import SecondFold from './Components/SecondFold';
import Footer from '../common-components/footer/Footer';
import { sm } from '../styled-components/device';

const HomeWrapper = styled.div`
  background: url("./images/bg.jpg") no-repeat top / cover;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  .custom-container {
    width: 100%;

    ${sm} {
      width: 680px;
      margin: 0 auto;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className="custom-container">
        <HeroBanner />
        <SecondFold />
        <Footer />
      </div>
    </HomeWrapper>
  );
};

export default Home;
