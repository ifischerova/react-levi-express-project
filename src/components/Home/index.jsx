import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SeatPicker } from '../SeatPicker';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();
  const url = 'https://apps.kodim.cz/daweb/leviexpress/api/reservation';

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  }

  const handleBuy = () => {
    console.log('Funguju!');
    fetch(url, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
  }

  const [journey, setJourney] = useState(null);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      { journey ? <JourneyDetail journey={ journey }/> : null }
      { journey ? <SeatPicker seats={journey.seats} journey={journey.journeyId} selectedSeat={journey.autoSeat}/>  : null}
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={() => handleBuy()}>Rezervovat</button>
      </div>
    </main>
  )
};


