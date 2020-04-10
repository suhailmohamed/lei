import React from 'react';
import styled from 'styled-components';
import { xs, sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const FooterWrapper = styled.footer`
  background-color: ${theme.black};
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 40px 16px;
  ${xs} {
    flex-wrap: wrap;
    flex-direction: column;
  }
  ${sm}{
    padding: 16px 40px;
    align-items: flex-end;
  }

  .left-col {
    a {
      display: inline-block;
      img {
        height: 48px;
        ${sm}{
         height: 56px; 
        }
      }
    }
  }
  .right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: ${theme.white};
    
    ${xs} {
      margin-top: 24px;
    }
    ${sm} {
      text-align: right;
    }

    a {
      color: ${theme.white};
      font-size: 17px;
      line-height: 1.41;
      letter-spacing: -0.25px;
      font-weight: ${theme.bold};
      display: inline-block;
      margin-bottom: 4px;
      transition: text-shadow 0.4s ease 0s;
      &:hover {
        text-shadow: rgb(255, 255, 255) 0px 0px 16px;
      }
    }
    p {
      margin-bottom: 0
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="left-col">
        <a href="/">
          <img src="./images/footer-logo.svg" alt="logo" />
        </a>
      </div>
      <div className="right-col">
        <a href="tel:513-318-7498">513-318-7498</a>
        <p>11880 Kemper Springs Dr. Cincinnati, OH 45240</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
