import React from "react";
import { Seat } from "../Seat";

export const SeatRow = ( {row, rowSelectedSeat}) => {
    const testRow = [
        {
          number: 33,
          isOccupied: false,
        },
        {
          number: 29,
          isOccupied: true,
        },
        {
          number: 25,
          isOccupied: false,
        },
      ];

    return (
        <>
         <div className="seat-row">
            { row.map((row) => 
            <Seat 
            number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={row.number === rowSelectedSeat ? true : false}
            />
            )}   
         </div>
        </>
    );
};