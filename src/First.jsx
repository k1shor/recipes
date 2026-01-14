import React from 'react'
import { useParams } from 'react-router-dom'

const First = () => {
  return (
    <div className='myAlignment'>First</div>
  )
}

export default First

// rafce

export const Second = () => {
  return (
    <div>Second</div>
  )
}

export const Third = () => {
  let params = useParams()
  let name = params.user
  return (
    <div>
     <h1>
      Welcome, {name}
      </h1> 
    </div>
  )
}
