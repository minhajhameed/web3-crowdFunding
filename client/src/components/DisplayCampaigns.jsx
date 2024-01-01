import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';
import FundFullCard from './FundFullCard';

const DisplayCampaigns = ({ title, isLoading, campaigns, path }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    <>
    {path !== 'home' && (
      <section className='mb-10 w-full'>     
      {!isLoading && campaigns.length > 0 && (
      <FundFullCard 
        key={uuidv4()}
        {...campaigns[campaigns.length - 1]} // Accessing the last element in the campaigns array
        handleClick={() => handleNavigate(campaigns[campaigns.length - 1])} // Handle click for the last card
      />
    )}

      </section>
    )}

    <div>
    {path !== 'home' && (
      <h1 className="font-epilogue font-semibold text-[18px] text-dark dark:text-white text-left">{title} ({campaigns.length})</h1>
    )}

      <div className="flex flex-wrap  mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        
        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => 
        <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        )}
        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => 
        <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => 
        <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => 
        <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />
        )}
      </div>
    </div>
    </>
  )
}

export default DisplayCampaigns