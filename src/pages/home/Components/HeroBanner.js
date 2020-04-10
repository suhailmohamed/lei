import React from 'react';
import styled from 'styled-components';
import { xs, sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const HeroBannerWrapper = styled.div`
  display: flex;
  background-color: transparent;
  margin-bottom: 40px;

  ${xs}{
    flex-wrap: wrap;
    flex-direction: column;
    padding: 40px 16px 40px;
  }
  ${sm}{
    padding: 40px 0 0;
  }

  .left-col {
    a {
      display: inline-block;

      img {
        height: 64px;
        
        ${sm}{
          height: 88px;
        }
      }
    }
  }
  .right-col {
    flex: 1;

    .form-container {
      width: 100%;
      max-width: 320px;
      position: relative;
      background-color: rgba(0, 0, 0, .6);
      border-radius: 8px;
      padding: 96px 24px 32px;
      ${xs} {
        margin: 64px auto 0;
      }
      ${sm} {
        margin-left: auto;
      }

      .ph-number {
        background-color: ${theme.white};
        color: #bf1e2e;
        min-height: 40px;
        font-size: ${theme.xLarge};
        line-height: ${theme.lineHeight1_09};
        letter-spacing: -0.25px;
        font-weight: ${theme.bold};
        position: absolute;
        left: -12px;
        right: -12px;
        top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, .5);
        ${sm}{
          left: -24px;
          right: -24px;   
        }
      }

      .form-group { 
        margin-bottom: 16px;

        .form-control {
          padding: 8px;
          border-radius: 3px;
          height: 36px;
          background-color: ${theme.white};
          border-color: ${theme.white};
          font-size: ${theme.base};
          line-height: ${theme.lineHeight1_2};
          letter-spacing: -0.3px;
          color: ${theme.black};

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: #2b292a;
          }
        }

        textarea.form-control {
          height: auto;
        }

        label {
          color: ${theme.white};
        }

        .check-box {
          display: flex;
          justify-content: space-around;

          label {
            margin-top: 4px;
            margin-bottom: 0;

            ${sm}{
              margin-top: 2px;
            }
          }
        }
      }

      .btn {
        padding: 6px 24px;
        background-color: ${theme.white};
        border-color: ${theme.white};
        font-weight: ${theme.semiBold};
      }
    }
  }
`;

const HeroBanner = () => {
  return (
    <HeroBannerWrapper>
      <div className="left-col">
        <a href="/">
          <img src="./images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="right-col">
        <div className="form-container">
          <div className="ph-number">513-318-7498</div>
          <div className="form-group">
            <input className="form-control" name="" placeholder="First Name*" />
          </div>
          <div className="form-group">
            <input className="form-control" name="" placeholder="Last Name*" />
          </div>
          <div className="form-group">
            <input className="form-control" name="" placeholder="Phone Number*" />
          </div>
          <div className="form-group">
            <input className="form-control" name="" placeholder="Email Address*" />
          </div>
          <div className="form-group">
            <input className="form-control" name="" placeholder="Zip Code*" />
          </div>
          <div className="form-group">
            <label>Which Service(s) Are You Inquiring About?</label>
            <div className="check-box">
              <div>
                <input type="checkbox" id="opt__1" className="form-check-input" />
                <label htmlFor="opt__1">Windows</label>
              </div>
              <div>
                <input type="checkbox" id="opt__1" className="form-check-input" />
                <label htmlFor="opt__1">Siding</label>
              </div>
              <div>
                <input type="checkbox" id="opt__1" className="form-check-input" />
                <label htmlFor="opt__1">Roofing</label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <textarea class="form-control" id="exampleTextarea1" placeholder="Comments:" rows="3"></textarea>
          </div>
          <div className="text-center">
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;
