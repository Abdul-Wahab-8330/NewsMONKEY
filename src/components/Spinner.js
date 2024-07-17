import React from 'react'
import loading from './loading.gif'

const Spinner =()=> { 
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" className="img-fluid" style={{ width: '34px', marginTop:'70px', marginBottom:'70px' }} />
      </div>
    )
}
export default Spinner