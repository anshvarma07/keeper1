import React from 'react'

export default function Footer() {
    const date=new Date();
    let currtime=date.getFullYear();
    
  return (
    <footer>
      <p className='Footer'>Copyright &#169; {currtime}</p>
    </footer>
  )
}

