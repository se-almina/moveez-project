import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/OrderPage.css'
import Select from "react-select";


export default function OrderPage() {

    const location = useLocation();
    const movie = location.state;
    console.log(movie);

    const [ticketNumber, setTicketNumber] = React.useState(1);
    const [foodandDrinkPrice, setfoodandDrinkPrice] = React.useState(0);


    function handleMinus() {
        if (ticketNumber == 0) {
            const newticketNumber = ticketNumber;
            setTicketNumber(newticketNumber);

        } else {
            const newticketNumber = ticketNumber - 1;
            setTicketNumber(newticketNumber);

        }
    }

    function handlePlus() {
        const newticketNumber = ticketNumber + 1;
        setTicketNumber(newticketNumber);
    }

    function foodPrice() {

    }

    const [selectedOptions, setSelectedOptions] = React.useState();


    const optionList = [
        { value: "popcorns", label: "Popcorn-S" },
        { value: "popcornm", label: "Popcorn-M" },
        { value: "popcornl", label: "Popcorn-L" },
        { value: "cocacola", label: "Coca Cola" },
        { value: "fanta", label: "Fanta" },
        { value: "water", label: "Water" }
    ];
    function handleSelect(data) {
        setSelectedOptions(data);
        console.log(movie.price)
    }



    const createOrder = async () => {
        const url = 'https://moveez-r9ei.onrender.com/order'; // Replace with the actual API endpoint URL
      
        const orderData = {
            movietitle: movie.title,
            ticketNumber:ticketNumber,
            foodandDrink:selectedOptions,
            dateAndTimeOfProjection: movie.dateAndTimeOfProjection,
            price:movie.price
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          });
      
          if (response.ok) {
            const order = await response.json();
            console.log('Order created:', order);
          } else {
            const error = await response.json();
            console.error('Failed to create order:', error);
          }
        } catch (error) {
          console.error('Failed to create order:', error);
        }
      };

    return (
        <div>
            <div className="order-movie">
                <div className='cont1'>
                    <div><img src={require(`../uploads/${movie.image.name}`)} /></div>
                    <div className="details">
                        <div className="o-title">{movie.title}</div>
                        <div className="o-cast">{movie.cast}</div>
                        <div className="o-duration">{movie.durationH}h {movie.durationM}m</div>
                        <div className="ticket-number">
                            <button onClick={handleMinus}>-</button>
                            <div>{ticketNumber}</div>
                            <button onClick={handlePlus}>+</button>
                        </div>
                    </div>
                </div>
                <div className='cont3'>
                    <div>Price {movie.price}$</div>
                </div>
            </div>
            <div className='food-drink'>
                <div>Food and Drink</div>
                <Select
                    options={optionList}
                    placeholder="Select food or drink"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                />
            </div>
            <div><button onClick={createOrder}></button></div>
        </div>
    )
    }
