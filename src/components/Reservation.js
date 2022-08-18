/*eslint-disable */
import React, { useState } from 'react';
import Css from './Reservation.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'

function Reservation() {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='main-container'>
      <div className='content-container'>
        <h1>Reserve a car with prestine-car</h1>
        <p>Classic cars bring me utter happiness. Reserve a car with us today</p>
        <div className='reservation-buttons'>
        { openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
          />}
          {/* <span>select reservation date</span> */}
          <button onClick={() =>setOpenDate(!openDate)}className='button'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</button>
          <button className='button'>Reserve now</button>
        </div>
      </div>
    </div>
  )
}

export default Reservation
