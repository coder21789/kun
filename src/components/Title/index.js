import React from 'react'

import {
  TitleWrap
} from './style'

const Title = ({children, className, type, ...rest}) => (<TitleWrap style={{
  fontSize: type === 'mini' ? '12px': '22px'
}} className={type === 'mini' ? `${className} mini` : className} rest>{children}</TitleWrap>)

export default Title