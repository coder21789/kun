import React, { Component } from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';

import Swiper from 'swiper/dist/js/swiper'

import Card from '../../../components/Card'
import Title from '../../../components/Title'

import BorderRight from '../../../statics/card-border-right.svg'
import circleSVG from '../../../statics/core-base.svg'
import coreLine from '../../../statics/core-line.svg'

// import revenueIcon from '../../../statics/revenue-icon.svg'
// import mouthReveneIcon from '../../../statics/mouthRevene-icon.svg'
// import upIcon from '../../../statics/up-icon.svg'
// import downIcon from '../../../statics/down-icon.svg'

class Core extends Component {
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    const myChart = echarts.init(document.querySelector('#js-revenueChart'));

    let option = {
      grid: {
        left: '6%',
        right: '6%',
        top: '40',
        bottom: '0',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#245080'
          }
        },
        axisLabel: {
          color: '#CCEEFF',
          fontSize: 10
        },
        axisTick: {
          show: false,
        },
        boundaryGap: false,
        data: ['2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07']
      },
      yAxis: {
          name: '单位：万元',
          nameTextStyle: {
              color: '#CCEEFF',
              fontSize: 12
          },
          axisLine: {
              lineStyle: {
                  color: '#245080'
              }
          },
          type: 'value',
          axisLabel: {
              show: true,
              interval: '0',
              color: '#CCEEFF',
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#245080',
                  type: 'solid'
              },
          },
          axisTick: {
            show: false,
          },
      },
      series: [
        {
          name: '',
          color: ['red'],
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: {
                  width: 2, //折线宽度
              },
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 1,
                  color: '#00D8FF' // 0% 处的颜色
              }, {
                  offset: 0,
                  color: '#00D8FF' // 100% 处的颜色
              }], false),
              opacity: 0.4
            }
          },
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#008FFF',
                  },
                  {
                    offset: 1,
                    color: 'rgba(189,239,255,0)',
                  },
                ],
              },
            },
          },
          data: [17618.40, 65049.80, 110645.57, 124800.26, 221616.53, 279355.58]
        }
      ]
    };
    myChart.setOption(option);

    const myChart2 = echarts.init(document.querySelector('#js-taxChart'));
    let option2 = {
      grid: {
        left: '6%',
        right: '6%',
        top: '40',
        bottom: '0',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#245080'
          }
        },
        axisLabel: {
          color: '#CCEEFF',
          fontSize: 10
        },
        axisTick: {
          show: false,
        },
        boundaryGap: false,
        data: ['2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07']
      },
      yAxis: {
          name: '单位：万元',
          nameTextStyle: {
              color: '#CCEEFF',
              fontSize: 12
          },
          axisLine: {
              lineStyle: {
                  color: '#245080'
              }
          },
          type: 'value',
          axisLabel: {
              show: true,
              interval: '0',
              color: '#CCEEFF',
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#245080',
                  type: 'solid'
              },
          },
          axisTick: {
            show: false,
          },
      },
      series: [
        {
          name: '',
          color: ['red'],
          type: 'line',
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: {
                  width: 2, //折线宽度
              },
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 1,
                  color: '#00D8FF' // 0% 处的颜色
              }, {
                  offset: 0,
                  color: '#00D8FF' // 100% 处的颜色
              }], false),
              opacity: 0.4
            }
          },
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#008FFF',
                  },
                  {
                    offset: 1,
                    color: 'rgba(189,239,255,0)',
                  },
                ],
              },
            },
          },
          data: [5701.47, 7753.21, 9463.01, 12452.71, 13590.61, 15576.56]
        }
      ]
    };
    myChart2.setOption(option2);

    setTimeout(() => {
      let _this = this

      new Swiper('#js-leftCarousel .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
          delay: 3000
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
    }, 100)
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
        } type="mini">今年累计营收趋势</Title>
        <Title  className={
          currentIndex === 1 ? '' : 'isblur'
        } type="mini">今年累计税收趋势</Title>
      </div>
    )
    return (
      <div className={className}>
        <Card title={<Title>核心指标</Title>}
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
              2018年1月至2018年7月
            </span>
          )}>
          <div style={{
            position: 'relative',
            height: '540px',
          }}>

            <img style={{
              position: 'absolute',
              top: '106px',
              left: '60px',
              zIndex: 1
            }} src={circleSVG} alt=""/>

            <div className="coreLine">
              <img src={coreLine} alt=""/>
            </div>

            <div className="coreListWrap" style={{
              justifyContent: 'flex-start'
            }}>
              {TitleWrap}

              <div id="js-leftCarousel" style={{
                width: '100%',
                height: '180px'
              }}>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div id="js-revenueChart" style={{
                        width: '100%',
                        height: '180px'
                      }}>

                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div id="js-taxChart" style={{
                        width: '100%',
                        height: '180px'
                      }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <img style={{
            position: 'absolute',
            right: '-48px',
            top: '52px',
          }} src={BorderRight} alt=""/>

          <img style={{
            position: 'absolute',
            right: '-48px',
            top: '304px',
          }} src={BorderRight} alt=""/>
        </Card>
      </div>
    )
  }
}

export default Core
