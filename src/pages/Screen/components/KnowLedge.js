import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper'

import Card from '../../../components/Card'
import Title from '../../../components/Title'

import BorderRight from '../../../statics/card-border-right.svg'

class KnowLedge extends Component {
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    let _this = this

    new Swiper('#js-knowCarousel .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 1,
      autoplay: {
        delay: 4000
      },
      setWrapperSize: true,
      on: {
        slideChange: function() {
          _this.setState({
            currentIndex: this.realIndex
          })
        }
      }
    })
  }

  render() {
    const {
      className
    } = this.props

    const {
      currentIndex
    } = this.state

    return (
      <div className={className}>
        <Card
          contentStyle={{
            minHeight: '100px',
            padding: '20px 0'
          }}
          title={<Title>累计知识产权分布</Title>}
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
              历史累计
            </span>
          )}
        >
        <div style={{
          position: 'absolute',
          right: '0',
          display: 'inline-block',
          fontSize: '17px',
          color: 'rgba(131,180,204,1)'
        }}>
          <span style={currentIndex === 0 ?{
            display: 'inline-block',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            marginRight: '10px',

            color: '#0077B7',
            border: '1px solid rgba(171,242,255,1)',
            textAlign: 'center',
          } : {
            display: 'inline-block',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            textAlign: 'center',
            marginRight: '10px',

            color: '#0077B7',
            border: '1px solid rgba(3,99,116,1)',
          }}>1</span>

          <span style={currentIndex === 1 ?{
            display: 'inline-block',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            marginRight: '10px',

            color: '#0077B7',
            border: '1px solid rgba(171,242,255,1)',
            textAlign: 'center',
          } : {
            display: 'inline-block',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            textAlign: 'center',
            marginRight: '10px',

            color: '#0077B7',
            border: '1px solid rgba(3,99,116,1)',
          }}>2</span>
        </div>
          <div id="js-knowCarousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/statics/knowledge/know-1.svg" alt=""/>
                </div>
                <div className="swiper-slide">
                  <img src="/statics/knowledge/know-2.svg" alt=""/>
                </div>
              </div>
            </div>
          </div>

          <img style={{
            position: 'absolute',
            left: '-80px',
            top: '22px',
            transform: 'rotate(180deg)'
          }} src={BorderRight} alt=""/>
        </Card>
      </div>
    )
  }
}

export default KnowLedge