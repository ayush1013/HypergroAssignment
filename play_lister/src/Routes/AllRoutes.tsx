import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Creators from '../Pages/Creators'
import PlayVideo from '../Pages/PlayVideo'
import AllVideos from '../Pages/AllVideos'
import SingleCreator from '../Pages/SingleCreator'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/creators" element={<Creators/>} ></Route>
        <Route path="/play/:id" element={<PlayVideo/>} ></Route>
        <Route path="/videos" element={<AllVideos/>} ></Route>
        <Route path="creator/:name" element={<SingleCreator/>} ></Route>
    </Routes>
  )
}

export default AllRoutes