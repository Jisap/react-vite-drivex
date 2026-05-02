import React from 'react'
import AutoScrollText from '../../../../shared/ui/AutoScrollText'

const Marquee = () => {
  return (
    <>
      <div className='mb-5'>
        <AutoScrollText items={[
          "PREMIUM CAR CARE"
        ]} />
      </div>
    </>
  )
}

export default Marquee