import React from 'react'

const MyButton = ({text = "Click Me", bgcolor = 'gray', color = 'white', handleClick}) => {
  return (
    <button className='px-4 py-2'
    style={{
        border: "2px solid gray",
        borderRadius: '10px',
        boxShadow: '0 5px 10px gray',
        backgroundColor: bgcolor,
        color
    }} onClick={handleClick}>
        {text}
    </button>
  )
}

export default MyButton