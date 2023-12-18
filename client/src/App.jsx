import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, ViewAll } from './pages';

const App = () => {
  const [divClassName, setDivClassName] = useState('dark');
  const [prevClassName, setPrevClassName] = useState('dark');

  const changeDivClassName = (newClassName) => {
    if (newClassName !== divClassName) {
      setPrevClassName(divClassName); 
      setDivClassName(newClassName); 
    } else {

      setDivClassName(prevClassName);
    }
  };

  return (
    <div className={divClassName}>
    <div className="prime_font relative sm:-8 p-4 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 bg-gradient-to-bl from-rose-100 via-pink-100 to-slate-200 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar changeDivClassName={changeDivClassName}/>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-all" element={<ViewAll />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
    </div>
  )
}

export default App