import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper'

import Card from '../../../components/Card'
import Title from '../../../components/Title'

import BorderRight from '../../../statics/card-border-right.svg'

class AnnelStatus extends Component {
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    let _this = this

    new Swiper('#js-rightCarousel .swiper-container', {
      direction: 'vertical',
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

    const  {
      currentIndex
    } = this.state

    const TitleWrap = (
      <div>
        <Title className={
          currentIndex === 0 ? '' : 'isblur'
        }>今年累计营收 TOP5</Title>
        <Title  className={
          currentIndex === 1 ? '' : 'isblur'
        }>历年累计融资 TOP5</Title>
      </div>
    )

    return (
      <div className={className}>
        <Card
          contentStyle={{
            padding: '20px 0'
          }}
          title={TitleWrap}
        >
          <div id="js-rightCarousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <ul className="listWrap">
                    <li>
                      <div className="listContent">
                        <strong>1</strong>
                        <p>杭州大搜车汽车服务有限公司</p>
                        <em>
                          14.50
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>2</strong>
                        <p>杭州早稻科技有限公司</p>
                        <em>
                          1.51
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>3</strong>
                        <p>杭州申昊科技股份有限公司</p>
                        <em>
                          1.25
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>4</strong>
                        <p>杭州安步网络科技有限公司</p>
                        <em>
                          1.15
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>5</strong>
                        <p>杭州容大智造科技有限公司</p>
                        <em>
                          1.09
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                  </ul>
                </div>
                <div className="swiper-slide">
                  <ul className="listWrap">
                    <li>
                      <div className="listContent">
                        <strong>1</strong>
                        <p>杭州大搜车汽车服务有限公司</p>
                        <em>
                          **.25
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>2</strong>
                        <p>同盾科技有限公司</p>
                        <em>
                          *.07
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>3</strong>
                        <p>杭州康晟健康管理咨询有限公司</p>
                        <em>
                          *.06
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>4</strong>
                        <p>杭州数澜科技有限公司</p>
                        <em>
                          *.02
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                    <li>
                      <div className="listContent">
                        <strong>5</strong>
                        <p>杭州早稻科技有限公司</p>
                        <em>
                          *.82
                          <i>亿元</i>
                        </em>
                      </div>
                      <div className="listLine" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img style={{
            position: 'absolute',
            left: '-80px',
            top: '72px',
            transform: 'rotate(180deg)'
          }} src={BorderRight} alt=""/>
        </Card>
      </div>
    )
  }
}

export default AnnelStatus