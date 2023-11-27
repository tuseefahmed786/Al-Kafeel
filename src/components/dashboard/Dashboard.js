import React from 'react'
import Namescompo from '../allcomponentsname/Namescompo'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <>
            <Namescompo/>
        <Outlet/>
    </>
  )
}

export default Dashboard