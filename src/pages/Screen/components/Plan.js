import React, { Component } from 'react'

import Card from '../../../components/Card'
import Title from '../../../components/Title'

import BorderRight from '../../../statics/card-border-right.svg'

class Plan extends Component {
  render() {
    const {
      className
    } = this.props
    return (
      <div className={className}>
        <Card
          contentStyle={{
            padding: '40px 0',
            color: '#ccc'
          }}
          title={<Title>鲲鹏计划目标</Title>}
        >
          未来科技城力争在5年内，使“鲲鹏计划”入选企业总数达到<strong>100</strong>家，成功培育上市企业<strong>20</strong>家，新增行业独角兽
          <strong>10</strong>家，主营业务收入超10亿元企业
          <strong>10</strong>家，税收贡献超千万企业
          <strong>50</strong>家，税收五千万元以上企业
          <strong>20</strong>家，税收一亿元以上企业
          <strong>10</strong>家

          <img style={{
            position: 'absolute',
            right: '-48px',
            top: '52px',
          }} src={BorderRight} alt=""/>
        </Card>
      </div>
    )
  }
}

export default Plan