import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-secondary-subtle p-5 text-center fs-3'>
        The page you are looking does not exist. Go to <Link to={'/'}>HOME</Link>.
    </div>
  )
}

export default NotFound