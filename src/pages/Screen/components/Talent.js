import React, { Component } from 'react'

import Card from '../../../components/Card'
import Title from '../../../components/Title'

import BorderRight from '../../../statics/card-border-right.svg'

import TalentContent from '../../../statics/talent-content.svg'

class Talent extends Component {
  render() {
    const {
      className
    } = this.props
    return (
      <div className={className}>
        <Card
          title={<Title>人才需求</Title>}
          headerRight={(
            <span style={{
              float: 'right',
              fontSize:'16px',
              marginTop: '4px',
              fontFamily:'PingFangSC-Medium',
              fontWeight:500,
              color :'rgba(160,233,255,1)',
              lineHeight:'22px',
              textShadow:'0px 0px 5px rgba(9,210,255,0.69)'
            }}>
              最近3个月
            </span>
          )}
        >
          <img src={
            TalentContent
          } alt=""/>

          <img style={{
            position: 'absolute',
            left: '-80px',
            top: '52px',
            transform: 'rotate(180deg)'
          }} src={BorderRight} alt=""/>
        </Card>
      </div>
    )
  }
}

export default Talent