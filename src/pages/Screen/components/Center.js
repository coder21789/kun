import React, { Component } from 'react'
import axios from 'axios';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';

import {
  getFormatMoney
} from '../../../utils'

import {
  CenterWrap,
  CenterInfoWrap,
  CenterTitle,
  CenterNum,
  CenterCarousel,
  LogoWrapper,
  Pannel,
  PannelTitle,
  PannelContent,
  PannelDesc
} from  '../style'

import Swiper from 'swiper/dist/js/swiper'

import carouselBg from '../../../statics/carousel-bg.png'

import companyicon from '../../../statics/company-dc.svg'

const filterType = function(str) {
 const data = [
   '大健康',
   '大数据__互联网平台__网络安全__物联网',
   '环保',
   '金融服务',
   '人工智能__文化创意',
   '软件开发__新能源新材料',
   '智能制造'
 ]

 return encodeURI(data.find(item => item.indexOf(str) !== -1))
}

const chartData = [
  [357.81, 681.68, 2074.81, 3558.28, 10705.06, 12540.44],
  [2155.38, 4772.56, 6850.9, 6972.77, 8913.7, 10379.3],
  [151.38, 286.26, 492.69, 492.69, 671.28, 866.15],
  [791.55, 2183.3, 2954.71, 2969.77, 4218.46, 4587.24],
  [934.62, 1782.43, 4757.54, 4757.54, 7381.16, 8175.49],
  [360.9, 1302.78, 2056.31, 2261.84, 3453.59, 4314.93],
  [1458.44, 2624.02, 3578.98, 5812.4, 6451.57, 7529.26],
  [29448.34, 50460.74, 62794.34, 62794.34, 123669.2, 145020.53],
  [814.01, 1076.02, 1899.66, 1899.66, 2884.56, 3791.22],
  [1780.02, 3258.76, 4503.97, 4503.97, 5887, 7339.1],
]


class Center extends Component {
  state = {
    data: [],
    currentIndex: 0
  }
  componentDidMount() {
    const {
      currentIndex
    } = this.state
    axios.post('http://121.196.202.79:8080/futureCity/portal/screen/kp/kpCompanies').then(({data}) => {

      const myChart = echarts.init(document.querySelector('#js-centerChart'));
      let option = {
        title: {
          text: '企业营收趋势',
          left: 0,
          textStyle: {
            color: '#9CDCFA',
            fontSize: '16px'
          },
        },
        grid: {
          left: '20',
          right: '6%',
          top: '60',
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
                fontSize: 14,
                padding: [
                  0,  // 上
                  0, // 右
                  0,  // 下
                  60, // 左
                ]
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
            // data: chartData[currentIndex]
            data: data.data[0] && data.data[0].data.split(',').map(item => +(item/10000).toFixed(2))
          }
        ]
      };
      myChart.setOption(option);

      this.setState({
        data: data.data
      }, () => {
        let _this = this
        new Swiper('#certify .swiper-container', {
          watchSlidesProgress: true,
          slidesPerView: 3,
          centeredSlides: true,
          loop: true,
          loopedSlides: 3,
          autoplay: {
            delay: 30000
          },
          setWrapperSize: true,
          on: {
            progress: function(progress) {
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;
                var scale = 1 - Math.abs(slideProgress) / 2;
                var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform(' scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                  slide.css('opacity', 0);
                }
              }
            },
            setTransition: function(transition) {
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
              }
            },
            slideChange: function() {
              _this.setState({
                currentIndex: this.realIndex
              }, () => {
                const {
                  data,
                  currentIndex
                } = _this.state
                const myChart = echarts.init(document.querySelector('#js-centerChart'));
                let option = {
                  title: {
                    text: '企业营收趋势',
                    left: 0,
                    textStyle: {
                      color: '#9CDCFA',
                      fontSize: '14px'
                    }
                  },
                  grid: {
                    left: '20',
                    right: '6%',
                    top: '60',
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
                      // data: chartData[currentIndex]
                      data: data[currentIndex] && data[currentIndex].data.split(',').map(item => +(item/10000).toFixed(2))
                    }
                  ]
                };
                myChart.setOption(option);
              })
            }
          },
        })
      })

    }).catch(() => {
      console.log('error')
    })
  }

  render() {
    const {
      data,
      currentIndex
    } = this.state

    const cureentData = data.find((item, index) => index === currentIndex)

    return (
      <CenterWrap>
        <CenterInfoWrap>
          <CenterTitle>
            鲲鹏培育企业总数
          </CenterTitle>
          <CenterNum>
            <span>6</span>
            <span>0</span>
          </CenterNum>
        </CenterInfoWrap>
        <img
          style={{
            position: 'absolute',
            width: '490px',
            left: '261px',
            top: '96px',
          }}
          src={carouselBg} alt=""/>
        <CenterCarousel>
          <div id="certify">
            <div className="swiper-container">
              <div className="swiper-wrapper">

                {
                  data.map((item) => (
                    <div key={item.id} className="swiper-slide">
                      <LogoWrapper>
                        <img src={`/statics/logopng/${item.abbName}.png`} alt=""/>
                      </LogoWrapper>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {
            cureentData ? (
              <Pannel>
                <PannelTitle>{cureentData.companyName}</PannelTitle>
                <PannelContent>
                  <div className="info">
                    <span>2018年营收：{getFormatMoney(cureentData.revenue).value}{getFormatMoney(cureentData.revenue).unit}</span>
                    <br/>
                    <span>2018年税收：{getFormatMoney(cureentData.vat).value}{getFormatMoney(cureentData.vat).unit}</span>
                  </div>
                  <div className="type">
                    <img src={`/statics/type/${filterType(cureentData.industry)}.png`} alt=""/>
                    <span>
                      行业：
                      <br/>
                      <em>
                        {cureentData.industry}
                      </em>
                    </span>
                  </div>
                </PannelContent>
                <PannelDesc>
                  {cureentData.remark}
                </PannelDesc>
                <div id="js-centerChart" style={{
                    height: '160px'
                  }}>

                </div>
              </Pannel>
            ) : (
              <Pannel>
                <PannelTitle>杭州橙鹰数据技术有限公司</PannelTitle>
                <PannelContent>
                  <div className="info">
                    <span>2018年营收：7500万</span>
                    <br/>
                    <span>2018年税收：532万</span>
                  </div>
                  <div className="type">
                    <img src="" alt=""/>
                    <span>
                      行业：
                      <br/>
                      <em>
                        大数据
                      </em>
                    </span>
                  </div>
                </PannelContent>
                <PannelDesc>
                  阿里巴巴旗下专注于安全服务的大数据公司，专注于公共安全数据应用及互联网服务的技术研发的项目建设，为全国公共安全提供数据专业模型、核心算法、可视分析、智能安全大脑等全方位一体化解决方案。
                </PannelDesc>
                <div id="js-centerChart" style={{
                    height: '160px'
                  }}>

                </div>
              </Pannel>
            )
          }

          <img style={{
            width: '81.5%',
            position: 'absolute',
            bottom: '-119px',
            left: '105px',
            zIndex: -1
          }} src={companyicon} alt=""/>
        </CenterCarousel>


      </CenterWrap>
    )
  }
}

export default Center