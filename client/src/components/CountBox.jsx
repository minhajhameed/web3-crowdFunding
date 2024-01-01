import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] dark:text-white text-black p-3 dark:bg-[#1c1c24] bg-[#fcfcff] rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] dark:bg-[#28282e] bg-[#415ee04f] px-3 py-2 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox