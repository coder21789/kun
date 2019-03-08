import styled from 'styled-components'

import titleLeftBg from './statics/title-left.svg'
import titleRightBg from './statics/title-right.svg'

export const TitleWrap = styled.h3`
  display: inline-block;

  position: relative;
  margin: 0;
  /* margin-left: 10px; */
  margin-left: -4px;
  padding: 2px 16px;
  background-repeat: no-repeat;

  font-size: 22px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(160,233,255,1);
  line-height: 30px;
  text-shadow: 0px 0px 5px rgba(9,210,255,0.69);

  &:first-child {
    margin-left: 0;
  }

  &.mini:before {
    transform: scale(0.5);
  }
  &.mini:after {
    transform: scale(0.5) rotate(180deg);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: url(${titleLeftBg});
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: url(${titleRightBg});
    transform: rotate(180deg);
  }

  &.isblur {
    color:rgba(101,153,168,1);
  }
  &.isblur:before,
  &.isblur:after {
    background: none;
  }
`