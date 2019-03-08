import React, { Component } from 'react'

import ScreenHeader from './components/Header'
import Plan from './components/Plan'
import Core from './components/Core'

import Talent from './components/Talent'
import KnowLedge from './components/KnowLedge'
import AnnelStatus from './components/AnnelStatus'
import Center from './components/Center'


import {
  ScreenWrap, ScreenContent,
} from './style'

import {
  autoScreen
} from '../../utils'

import 'swiper/dist/css/swiper.min.css'

class Screen extends Component {
  state = {
    changeStyle: {}
  }

  componentDidMount() {
    this.autoComputerScreen()
    window.addEventListener('resize', this.autoComputerScreen)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.autoComputerScreen)
  }

  autoComputerScreen = () => {
    const changeStyle = autoScreen()

    this.setState({
      changeStyle
    })
  }

  render() {
    const {
      changeStyle
    } = this.state

    return (
      <ScreenWrap style={changeStyle} id="js-screen">
        <ScreenHeader>

        </ScreenHeader>

        <ScreenContent>
          <div className="left" style={{
            width: '370px'
          }}>
            <Plan className="planWrap"></Plan>
            <Core className="coreWrap"></Core>
          </div>
          <div className="left" style={{
            position: 'relative',
            width: 'calc(100% - 830px)',
            minHeight: '1px',
            height: '100%'
          }}>
            <Center></Center>
          </div>
          <div className="left" style={{
            width: '460px'
          }}>
            <Talent className="talentWrap"></Talent>
            <KnowLedge className="knowLedgeWrap"></KnowLedge>
            <AnnelStatus className="annelStatus"></AnnelStatus>
          </div>
        </ScreenContent>
      </ScreenWrap>
    )
  }
}

export default Screen