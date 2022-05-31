import React from 'react';

function List(props) {
  const coins = props.coins;
  function renderTable(data) {
    return coins.map((item, index) => {
      return (
        <tr key={index}>
          <td className="p-2">
            <div className="flex items-center">
              <img className="rounded-full h-9 w-9" src={item.image}/>
              <div className="text-slate-800 ml-2">{item.name}</div>
            </div>
          </td>
          <td className="p-2">
            <div className="text-center">{item.symbol}</div>
          </td>
          <td className="p-2">
            <div className="text-center text-indigo-500">{item.current_price}</div>
          </td>
          <td className="p-2">
            <div className="text-center text-green-500">{item.high_24h}</div>
          </td>
          <td className="p-2">
            <div className="text-center text-red-500">{item.low_24h}</div>
          </td>
          <td className="p-2">
            <div className="text-center">{item.url}</div>
          </td>
        </tr>)
    })
  }

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Crypto Exchange Rates</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Symbol</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Current Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">High 24h</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Low 24h</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {
                renderTable(coins)
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default List;
