import React from 'react'

export const Message = ({message}) => {

  console.log(message);
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://www.shutterstock.com/shutterstock/photos/1927774775/display_1500/stock-photo-young-businesswoman-feeling-puzzled-and-confused-with-a-dumb-stunned-expression-looking-at-1927774775.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hii</p>
        <img src="https://www.shutterstock.com/shutterstock/photos/1927774775/display_1500/stock-photo-young-businesswoman-feeling-puzzled-and-confused-with-a-dumb-stunned-expression-looking-at-1927774775.jpg" alt="" />

        <img src="" alt="" />
      </div>
    </div>
  )
}
