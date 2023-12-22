import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <section>
    <div className='mb-8 w-full flex justify-center items-center flex-col'>
  <h1 className='head_text text-center'>
    Fund Innovation
    <br className='hidden md:block'/>
    <span className='text-center prime_gradient'>Fuel Shaping Tomorrow</span>
  </h1>
    <p className='desc text-center'>
      We believe in the power of high-quality online education to create a better future for all
    </p>
</div>


    <DisplayCampaigns 
      path={'home'}
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
    </section>
  )
}

export default Home