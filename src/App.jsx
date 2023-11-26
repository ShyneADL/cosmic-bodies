import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Favourites, Home, Login, BodyPage, Profile } from './pages'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/favourites' element={<Profile/>}/>
                <Route path='/profile' element={<Favourites/>}/>
                <Route path="/bodies/:id" render={(props) => <BodyPage {...props} bodies={bodies} />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App