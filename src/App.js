// import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './Components/Header/Header';
import fakeData from '../src/fakeData/fakeData.json';
import { useEffect, useState } from 'react';
import Player from './Components/playerDetails/Player';
import Cart from './Components/Cart/Cart';


function App() {
  const [players,setPlayer] = useState(fakeData);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    // console.log(fakeData);
    setPlayer(fakeData);
  },[]);

  const handleAddPlayer = (player) =>{
    console.log('player added',player);
    const newCart = [...cart,player];
    setCart(newCart);
  }

  return (
    <div className="App">
      <Helmet>
        <title>transferMRKT</title>
      </Helmet>
      <Header></Header>
      <div className="playerAndCart">
        <div className="playerContainer">
          {
            players.map(player => <Player
                        player = {player}
                        handleAddPlayer = {handleAddPlayer}
                        ></Player>)
          }
        </div>
        <div className="cart">
          <Cart
          cart = {cart}
          ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
