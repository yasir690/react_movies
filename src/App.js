
import React, { useEffect } from 'react'
import { useState } from 'react'
import Result from './result';
import axios from 'axios';
const App = () => {
  const [search,setSearch]=useState('');
  const [movie,setMovies]=useState([]);

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


  const getAllMovies=()=>{

    axios.get(APIURL)
    .then((res)=>{
      setMovies(res.data.results)
    })
  }
  const getSearchedMovies=()=>{
axios.get(SEARCHAPI+search)
.then((res)=>{
  setMovies(res.data.results)
})
  }
  useEffect(()=>{
    setMovies([]);

    if(search==""){
getAllMovies()
    }
    else{
      getSearchedMovies()
    }
  },[search]);
  return (
    <div >
      <h1 className='text-center text-cyan-400 font-bold text-3xl' style={{textTransform:"capitalize"}}>movie search app</h1>
      <hr className='w-1/4 m-auto border-cyan-400 border-4 rounded mt-2'/>
      <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full border border-black rounded text-slate-700 p-4"/>
       <Result movie={movie}/>
      </div>
    </div>
  )
}

export default App