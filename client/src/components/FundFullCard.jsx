import React from 'react';

import { tagType, logo, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundFullCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  
  return (
    <div className="flex flex-col w-full sm:flex-row">
      <div className="w-full sm:w-1/2 relative cursor-pointer" onClick={handleClick}>
        <img
          src={image}
          alt="fund"
          className="p-1 w-full h-80 sm:h-auto object-cover rounded-3xl"
        />
      </div>
  
      <div onClick={handleClick} className="w-full sm:w-1/2 bg-white bg-opacity-40 dark:bg-opacity-5 rounded-3xl cursor-pointer mt-4 sm:mt-0 sm:ml-4 p-4 flex flex-col justify-between">
        <div className="flex flex-row items-center">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Personal
          </p>
        </div>
  
        <div className="mt-2">
          <h3 className="font-epilogue font-semibold text-[24px] dark:text-white text-black text-left truncate">
            {title}
          </h3>
          <p className="mt-1 text-[16px] font-epilogue font-normal text-[#808191] text-left truncate">
            {description}
          </p>
        </div>
  
        <div className="flex flex-wrap mt-2 gap-2">
          <div className="flex flex-col mr-12">
            <h4 className="font-epilogue font-semibold text-[24px] text-black dark:text-white leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-1 font-epilogue font-normal text-[22px] leading-[18px] text-[#808191] truncate">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[24px] text-black dark:text-white leading-[22px]">
              {remainingDays}
            </h4>
            <p className="mt-1 font-epilogue font-normal text-[22px] leading-[18px] text-[#808191] truncate">
              Days Left
            </p>
          </div>
        </div>
  
        <div className="flex items-center mt-4 sm:mt-0 gap-2">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#ffffff] dark:bg-[#13131a]">
            <img src={logo} alt="user" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#5d5e6a] truncate">
            by <span className="dark:text-[#b2b3bd] text-[#333338]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FundFullCard




