import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import {ThemeProvider} from "./contexts/ThemeContext"
import AppRouter from './config/Router';
function App() {
  return (
    <>
    

<div>
  <AppRouter/>
</div>

    </>
  )
}

export default App
