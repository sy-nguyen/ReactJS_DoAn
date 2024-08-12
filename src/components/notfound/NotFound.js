import React from 'react'
import imgNotFound from '../../Images/notfound.jpg'
import './notFound.css'


export default function NotFound() {
  return (
    <div className='co-notfound'>
        <img src={imgNotFound} alt='img-notfound'/>
    </div>
  )
}
