import styled from 'styled-components'
import bg from '../../statics/bg.png'
import headerBg from '../../statics/header-bg.png'
import coreBg from '../../statics/core-bg.svg'
import btnBg from '../../statics/btn-bg.svg'
import logoWallBg from '../../statics/logowall.png'

import companyBg from '../../statics/company-bg.svg'

export const ScreenWrap = styled.div`
  width: 1920px;
  height: 1080px;
  background: url(${bg}) ;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden
`

export const ScreenHeader = styled.div`
  position: relative;
  width: 100%;
  height: 119px;
  background: url(${headerBg});
  background-size: 100%;

  .date {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(143,221,235,1);
    line-height:22px;
  }

  .time {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(143,221,235,1);
    line-height:22px;
  }
`

export const ScreenContent = styled.div`
  position: relative;

  display: inline-flex;
  width: 100%;
  height: calc(100% - 119px);

  padding: 20px 20px 20px 43px;

  .planWrap {
    position: relative;
    width: 100%;

    strong {
      /* font-size: 28px; */
      color: #86BEFF
    }
  }

  .coreWrap {
    position: relative;
    width: 100%;

    background: url(${coreBg});
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: 160%;

    .coreTitle {
      position: absolute;
      top: 50px;
      left: 50%;
      z-index: 2;
      transform: translateX(-50%);

      text-align: center;
      color: #EAFAFF;

      h6 {
        margin: 0;
        font-size: 18px;
        line-height: 25px;
      }

      strong {
        line-height: 40px;
        font-size: 28px;
        i {
          font-size: 18px;
          font-style: normal;
          font-weight: normal;

        }
      }
    }

    .coreLine {
      position: relative;
      top: 45px;
      width: 100%;

      img {
        width: 100%;
        position: relative;
        left: 10px;
      }
    }

    .coreBtn {
      position: relative;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);

      display: inline-block;
      width: 252px;
      line-height: 40px;
      height: 40px;

      background: url(${btnBg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      font-size: 16px;
      text-align: center;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(217,238,255,1);
      text-shadow:0px 0px 2px rgba(51,187,255,1);
    }

    .coreListWrap {
      position: relative;
      top: 20px;
      display: inline-flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      width: 100%;
      .coreListItem {
        span.title {

          display: inline-block;
          vertical-align: middle;
          width: 90px;

          text-align: left;

          font-size:16px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(217,238,255,1);
          line-height:22px;
        }

        span.icon {
          display: inline-block;
          vertical-align: middle;

          margin-left: 21px;
          width: 160px;
          text-align: left;
          >img {
            width: 22px;
            height: 22px;
            margin-left: 9px;
          }
        }

        span.num {
          display: inline-block;
          vertical-align: middle;

          min-width: 80px;
          margin-left: 15px;
          font-size:20px;
          font-family:DINAlternate-Bold;
          font-weight:bold;
          color:rgba(204,238,255,1);
          text-shadow:0px 0px 2px rgba(51,187,255,1);
          em {
            font-style: normal;
            font-size: 16px;
          }
        }
      }
    }
  }

  .knowLedgeWrap {
    .nomal {
      display: 'inline-block';
      width: '30px';
      height: '30px';
      line-height: '30px';
      margin-right: '10px';
      border: '1px solid rgba(171,242,255,1)';
      text-align: 'center';
    }
    .active {
      display: 'inline-block';
      width: '30px';
      height: '30px';
      line-height: '30px';
      text-align: 'center';

      color: '#0077B7';
      border: '1px solid rgba(3,99,116,1)';
    }
  }

  .annelStatus {
    .listWrap {
      position: relative;
      padding-left: 0;
      list-style: none;

      li {
        position: relative;
        .listContent {
          height: 50px;
          padding: 14px 10px 11px 5px;
          strong {
            float: left;
            padding-right: 16px;
            font-size: 20px;
            font-family: DINAlternate-Bold;
            color: rgba(211, 244, 255, 1);
          }
          p {
            float: left;
            margin: 0;
            font-size: 18px;
            font-family: PingFangSC-Regular;
            color: rgba(120, 172, 212, 1);
          }
          em {
            float: right;
            font-size: 22px;
            font-style: normal;
            font-family: DINAlternate-Bold;
            color: rgba(204, 238, 255, 1);
            i {
              margin-left: 9px;
              font-size: 16px;
              font-style: normal;
              font-family: PingFangSC-Regular;
              color: rgba(204, 238, 255, 1);
            }
          }
        }

        .listLine {
          position: absolute;
          bottom: 2px;
          width: 0;
          height: 2px;
          transition: width 2s;
          background: linear-gradient(90deg, rgba(51, 230, 239, 1), rgba(46, 157, 255, 1));
        }
      }

      li:nth-child(2n + 1) {
        background: linear-gradient(135.4deg, rgba(51, 187, 255, 0), rgba(51, 187, 255, 0.2));
      }

      li:nth-child(1) {
        .listContent {
          strong {
            color: rgba(240, 89, 131, 1);
          }
        }

        .listLine {
          position: absolute;
          bottom: 2px;
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, rgba(238, 60, 126, 1), rgba(250, 193, 150, 1));
        }
      }

      li:nth-child(2) {
        .listLine {
          width: 60%;
        }
      }

      li:nth-child(3) {
        .listLine {
          width: 40%;
        }
      }

      li:nth-child(4) {
        .listLine {
          width: 30%;
        }
      }

      li:nth-child(5) {
        .listLine {
          width: 20%;
        }
        margin-bottom: 120px;
      }
    }
  }

  .left {
    /* float: left; */
  }
`

export const CenterWrap = styled.div`
  padding: 0 90px 0 48px;
  height: 100%;
`

export const CenterInfoWrap = styled.section`
  text-align: center;
  padding-bottom: 20px;
`

export const CenterTitle = styled.h1`
  font-size:32px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:27px;
  letter-spacing:3px;
  text-shadow:0px 0px 20px rgba(0,218,255,1);
`

export const CenterNum = styled.div`
  span {
    display: inline-block;
    width:50px;
    height:70px;
    line-height: 70px;
    margin-left: 29px;
    background:linear-gradient(180deg,rgba(0,242,255,1) 0%,rgba(5,161,215,1) 100%);
    box-shadow:0px 16px 16px 0px rgba(0,102,176,1),0px 5px 0px 0px rgba(0,200,255,1);
    border-radius:5px;

    font-size:50px;
    font-family:DINAlternate-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    letter-spacing:2px;
    text-align: center;
    &:first-child {
      margin-left: 0;
    }
  }
`

export const CenterCarousel = styled.div`
  padding-top: 10px;
  height: 100%;

  background: url(${logoWallBg});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100%;
  background-clip: padding-box;

  #certify {
    .swiper-container {
      width: 100%;
      height: 300px;
    }

    .swiper-wrapper {
      display: flex;
    }

    .swiper-slide {
      position: relative;
      width: 200px;
      filter: blur(2px);
      /* background: #fff; */
    }

    .swiper-slide.swiper-slide-active {
      /* width: 420px; */
      filter: blur(0px);
      /* height: 428px; */
      /* background: #f00; */
    }
  }
`

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 166px;
  height: 166px;
  background: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
  img {
    width: 100%;
    transform: rotate(-45deg);
  }
`

export const Pannel = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 463px;
  height: 388px;

  padding: 22px 33px;

  background: rgba(2,134,255,0.1);
  background-image: url(${companyBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const PannelTitle = styled.h2`
  margin: 0;

  font-size:24px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(230,246,255,1);
  line-height:33px;
  text-shadow:0px 0px 10px rgba(130,244,255,1);
  text-align: center;

  white-space: nowrap;
`

export const PannelContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 51px;
  margin: 11px 0;

  color:rgba(255,255,255,1);

  .info {
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:22px;

  }

  .type {
    display: inline-flex;
    height: 100%;
    margin-left: 20px;
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    line-height:22px;
    img {
      width: 55px;
      height: 55px;
    }
    > span {
      margin-left: 10px;
      em {
        margin-top: 4px;
        font-size:20px;
        font-style: normal;
        line-height:28px;
      }
    }
  }
  
`

export const PannelDesc = styled.div`
  height: 80px;
  font-size:14px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:20px;
`