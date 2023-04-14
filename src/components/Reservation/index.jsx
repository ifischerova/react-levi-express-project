import React, { useEffect, useState } from "react";
import './style.css';
import { useParams } from "react-router-dom";

export const Reservation = () => {
    const { reservationId } = useParams();

    const [reservation, setReservation ] = useState(null);

    useEffect(() => {
        fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${reservationId}`)
            .then((response) => response.json())
            .then((data) =>{console.log(data.results);
                setReservation(data.results)})

    },[])

    return (
        <>
        <h2>Detail jízdenky</h2>
            <div className="reservation container">
            <h2>Vaše e-jízdenka č. {reservationId}</h2>
            <div className="reservation__body">
            <div className="reservation__headings">
                <p>Datum cesty:</p>
                <p>Odjezd:</p>
                <p>Příjezd:</p>
                <p>Sedadlo:</p>
            </div>
            { 
            reservation ? 
                <div className="reservation__info">
                    <p>{reservation.date}</p>
                    <p>{reservation.fromCity.name }, {reservation.fromCity.time}</p>
                    <p>{reservation.toCity.name }, {reservation.toCity.time}</p>
                    <p>{reservation.seatNumber}</p> 
                </div> : 
            null
            }
            </div>
        </div>
      </>
    );
};