import React from 'react';
import styled from 'styled-components';
import { sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const SecondFoldWrapper = styled.div`
  width: 100%;
  background-color: ${theme.white};
  padding: 32px 32px 40px;
  ${sm}{
    padding: 32px 40px 40px;
  }

  .list {
    padding-left: 0;
    list-style: none;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    li {
      color: #748c02;
      font-weight: ${theme.bold};
      text-transform: uppercase;
      text-align: center;
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: -0.3px;
      
      ${sm}{
        font-size: ${theme.xLarge};
        line-height: ${theme.lineHeight1_09};
        letter-spacing: -0.25px;
      }

      img {
        display: block;
        margin: 0 auto 16px;
        object-fit: contain;
        object-position: bottom;
        width: 40px;
        height: 40px;
        ${sm}{
          width: 60px;
          height: 60px;
        }

        &:last-child {
          width: 80px;
          ${sm}{
            width: 120px;
          }
        }
      }
    }
  }

  .offer-img {
    text-align: center;
    margin-bottom: 24px;

    img {
      height: 72px;
      ${sm}{
        height: 120px;
      }
    }
  }

  p {
    margin-bottom: 24px;
  }

  .house-img {
    height: 200px;
    ${sm}{
     height: 288px; 
    }
  }

  .click-to-call {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 40px auto 0;
    text-align: center;
    font-size: 17px;
    line-height: 1.41;
    letter-spacing: -0.25px;
    font-weight: ${theme.semiBold};
    ${sm}{
      width: 40%;
    }

    .btn {
      padding: 8px 24px;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.29px;
      text-transform: uppercase;
      background-color: #596904;
      color: ${theme.white};
      border-radius: 0;
    }
  }
`;

const SecondFold = () => {
  return (
    <SecondFoldWrapper>
      <ul className="list">
        <li>
          <img src="./images/window.png" alt="window" />
          Windows
        </li>
        <li>
          <img src="./images/siding.png" alt="siding" />
          Siding
        </li>
        <li>
          <img src="./images/roof.png" alt="roof" />
          Roof
        </li>
      </ul>

      <div className="offer-img">
        <img src="./images/offer.svg" alt="offer" />
      </div>

      <p>Limited Time Only. Offer May Explire. Improve the curb appeal and energy efficiency of your home with the installation o fnew windows. Our experts offer FREE in home design consultations in the Cincinnati and Northern Kentucky area. Contact us today for all your window, roofing and siding needs.</p>
      <img src="./images/house.png" className="house-img" alt="house" />

      <div className="click-to-call">
        <button className="btn">Click to Call</button>
        Contact Us for a Free In-Home <br />
        Design Consultations Today
      </div>
    </SecondFoldWrapper>
  );
};

export default SecondFold;
