import React from 'react'

const FortunaCards = ({fortunaData}) => {
    console.log(fortunaData)
  return (
    <div className='Fortuna__Cards'>
      <div className='fortuna__cards--center'>
      <p className='fortuna__parrafo'>{fortunaData.phrase}</p>
        <p className='fortuna__fuente'>Autor: {fortunaData?.author}</p>

      </div>
        
    </div>

  )
}

export default FortunaCards