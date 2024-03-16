import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>MY APP</Typography>&nbsp;&nbsp;
            <Button variant='contained' color='success'>
                <Link to={'/'} style={{textDecoration:"none", color:"white"}}>View data</Link>
            </Button>&nbsp;&nbsp;
            <Button variant='contained' color='error'>
                <Link to={'/add'} style={{textDecoration:"none", color:"white"}}>Add data</Link>
            </Button>&nbsp;&nbsp;
            <Button variant='contained' color='warning'>
                <Link to={'/edit'} style={{textDecoration:"none", color:"white"}}>Edit data</Link>
            </Button>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
