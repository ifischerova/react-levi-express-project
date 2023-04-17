import React from "react";
import './style.css';
import { Seat } from "../Seat";
import { SeatRow } from "../SeatRow";

export const SeatPicker = ({ seats, journeyId, selectedSeat}) => {
    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                    <div className="seats">
                    { seats.map((seat, index) => 
                    <SeatRow 
                    row={seat} 
                    key={index}
                    rowSelectedSeat={selectedSeat}
                    />
                    )}
                    </div>
            </div>
        </>
    );
};