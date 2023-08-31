import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = () => {
    const navigate = useNavigate()
    const {isAuthenticated} = useSelector(state => state.user)
    
  return (
      <Fragment>
          {isAuthenticated ? <Outlet /> : navigate("/login")}
    </Fragment>
  )
}

export default ProtectedRoute