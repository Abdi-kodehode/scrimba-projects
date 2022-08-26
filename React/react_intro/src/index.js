import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { LandingPage } from './Pages/LandingPage';
import {HashRouter as Router } from "react-router-dom"



// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <LandingPage />
    </Router>
  </React.StrictMode>
)


