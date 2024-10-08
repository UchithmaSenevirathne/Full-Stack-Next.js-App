import React, { useEffect, useState } from 'react'
import Data from './../../shared/Data'
function GameList() {
    const [games,setGames]=useState();
    useEffect(()=>{
       setGames(Data.GameList) 
    },[])
  return (
    <div className='grid grid-cols-3 mt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
        {games?.map((item)=>(
            <div key={item.id}
              onClick={()=>onGamePress(item.name)}
            className='flex flex-col items-center cursor-pointer '>
                <img src={item.image} 
                width={45} height={45} 
                className='transition-all duration-150 hover:animate-bounce'/>
                <h2 className='text-[14px] text-center'>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default GameList