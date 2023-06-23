import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import SideBar from './components/SideBar'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import Users from './components/Context/Users'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import ListUser from './components/ListUser'
import Profiles from './components/Context/Profiles'
import EditProfile from './components/EditProfile'

function App() {
  return <>
    <BrowserRouter>
      <div id='wrapper'>
        <SideBar />
        {/* <ListUser/> */}
        <Routes>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='/create-user' element={
            <Users>
              <CreateUser />
            </Users>
          } />
          <Route path='/edit-user/:id' element={
            <Users>
              <EditUser />
            </Users>
          } />
          <Route path='/users' element={
          <Users>
            <ListUser/>
          </Users>
          } />
          <Route path='/profile' element={
            <Profiles>
              <Profile />
            </Profiles>
          } />
          <Route path='/edit-profile/:id' element={
            <Profiles>
              <EditProfile />
            </Profiles>
          } />
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App