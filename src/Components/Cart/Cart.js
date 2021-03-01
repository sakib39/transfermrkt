import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let transferCost = 0;
    let playerNames = [];
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        transferCost += player.TransferAmount;
        playerNames.push(player.Name);
    }
    return (
        <div>
            <h2>Transfer List:</h2>
            <p>Players Picked: {cart.length}</p>
            <p>Transfer Cost: {transferCost}</p>
            <h4>players picked:</h4>
            <ul>
                {
                    playerNames.map(playerName => <li>{playerName}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;