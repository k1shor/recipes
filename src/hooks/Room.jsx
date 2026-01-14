import React, { useContext } from 'react'
import Person from './Person'
import {MyContext} from './MyContext'

const Room = () => {

    let message = useContext(MyContext)

  return (
    <div className='w-1/2 mx-auto '>
        {message}
        <Person name="RAM" address="Kathmandu" phone='9876543212'/>
        <Person name="SHYAM" address="Lalitpur" phone="9865432132"/>
        <Person name="SITA" address="Bhaktapur" phone="9821345678"/>
    </div>
  )
}

export default Room