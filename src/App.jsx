import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import SinglePage from './pages/SinglePage'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/create" element={<CreatePage/>} />
    <Route path="/edit" element={<EditPage/>} />
    <Route path="/single" element={<SinglePage/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App