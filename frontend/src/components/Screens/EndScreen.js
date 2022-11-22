import React from 'react'
import { Link } from 'react-router-dom'
function EndScreen() {
  return (
    <div>
      <h1 className='text-center'>
        Your orders has been placed Successfully<br/><h2>Thanks for Shopping</h2>
      </h1>
      
      <Link to='/' className='btn btn-dark my-3 '>HOME</Link>

    </div>
  )
}

export default EndScreen
  