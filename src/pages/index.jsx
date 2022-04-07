import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login'
import Home from '../components/Home'
import SystemLayout from '../components/Layout/SystemLayout'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Router from 'next/router';
import { useSelector } from "react-redux";
import Feed from '../components/Feed'
import Datatable from '../components/Datatable'


export default function Main() {
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("persist:root"))?.user;
    console.log("Token is " + token)
    if(!user && !user.token){
        Router.push('/login')
     
    }
  }, [user]);

  return (
      
        <SystemLayout children = {<Datatable/>} />
  )
}
