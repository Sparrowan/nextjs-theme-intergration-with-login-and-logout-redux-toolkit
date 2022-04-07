import React from 'react'
import Sidebar from './Layout/SystemLayout'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Add from './Add'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from 'next/router';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, makeStyles } from "@material-ui/core";



export default function home() {

  // const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    // on initial load - run auth check 
    if (user) {
      Router.push('/')

    }
  }, []);
  return (
    <div>
      {user ?
        <div>
          <Grid container>
          {/* <Navbar /> */}
            <Grid item sm={2} xs={2}>
              <Sidebar />
            </Grid>
            <Grid item sm={10} xs={10}>
              <Feed />
            </Grid>
            {/* <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid> */}
          </Grid>
          <Add />
        </div>
        : <Login />}
    </div>
  )
}
