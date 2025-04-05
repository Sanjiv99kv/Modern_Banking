import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[14px] leading-[20px] mr-1'>
            <span className='text-gradient'>Get</span>
          </p>
            <img className='w-[18px] h-[18px] object-contain' src={arrowUp} alt="" />
        </div>
        <p className='font-poppins font-medium text-[14px] leading-[20px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
