import React, { Component } from 'react'

import {
  CardWrap,
  Header,
  Content
} from './style'

class Card extends Component {
  render() {
    const {
      title,
      contentStyle,
      headerRight,
      children
    } = this.props

    return (
      <CardWrap>
        <Header>
          {
            title
          }
          {headerRight && headerRight}
        </Header>
        <Content style={contentStyle}>
          { children }
        </Content>
      </CardWrap>
    )
  }
}

export default Card