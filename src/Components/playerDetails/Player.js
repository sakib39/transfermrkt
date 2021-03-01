import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';     //import bootstrap
import Button from 'react-bootstrap/Button';       //import bootstrap button

const Player = (props) => {
    const {Name,Position,TransferAmount,Image} = props.player;
    return (
        <div className="player-div">
            <div>
                <img src={Image} alt=""/>
            </div>
            <div className="player-details">
                <h2>Player Name: {Name}</h2>
                <p>Position: {Position}</p>
                <p><small>Transfer value: {TransferAmount}</small></p>
                <Button                                                         //bootstrap button
                onClick={() => props.handleAddPlayer(props.player)}
                ><FontAwesomeIcon icon={faCartPlus} /> Add Player</Button>
            </div>
        </div>
    );
};

export default Player;