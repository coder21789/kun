import React, { Component } from 'react'
import dayjs from 'dayjs'

import {
  ScreenHeader
} from '../style'
import { setInterval } from 'timers';
class Header extends Component {

  state = {
    date: '2018-01-01',
    time: '00:00'
  }

  componentDidMount() {
    console.log(dayjs(), dayjs().format('HH:mm'))

    clearInterval(this.timeId)
    this.timeId = setInterval(() => {
      const dayNow = dayjs()
      this.setState({
        date: dayNow.format('YYYY-MM-DD'),
        time: dayNow.format('HH:mm')
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  render() {
    const {
      date,
      time
    } = this.state
    return (
      <ScreenHeader>
        <div className="date">
          {date}
        </div>
        <div className="time">
          {time}
        </div>
      </ScreenHeader>
    )
  }
}

export default Header