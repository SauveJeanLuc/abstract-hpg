import React from 'react'
import SearchBar from './atoms/SearchBar'
export default function Help({helpStyle}) {
  return (
    <div className={`flex flex-col bg-indigo-300 ${helpStyle}`}>
        <span className={`font-bold text-5xl text-center basis-3/4 p-4`}> How can we Help ? </span>
        <SearchBar/>
    </div>
  )
}
