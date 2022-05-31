import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import List from '../partials/dashboard/List';
import axios from 'axios';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData(url) {
    const baseUrl = 'https://api.coingecko.com/api/v3/';
    return await axios.get(`${baseUrl}${url}`);
  }

  const coinsPath = 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(async () => {
    const coinsResponse = await getData(coinsPath);
    setCoins(coinsResponse.data);
    setIsLoading(false);
  }, []);

  function loadingIndicator() {
    return (
      <div className="inline-flex items-center justify-center px-4 py-2 font-semibold leading-6 text-sm text-indigo-600 h-52">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </div>
    )
  }
  

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-end sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <FilterButton />
                <Datepicker />
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <span className="hidden xs:block">Submit</span>
                </button>                
              </div>
            </div>
            <div className="grid grid-cols-14 gap-6">
              {isLoading ? loadingIndicator() : <List coins={coins} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
