
import { makeStyles } from '@mui/styles';
import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import Alert from './components/Alert';
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false


function App() {


  const useStyles=makeStyles(() => ({
    App:{
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
    },
  }));

  const classes=useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
        <Route path="/" element={<Homepage/>} exact />
        
        <Route path="/coins/:id" element={<CoinPage/>} />

        </Routes>

      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
