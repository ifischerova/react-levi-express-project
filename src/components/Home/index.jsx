import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourney(journey);
  }

  const [journey, setJourney] = useState(null);


  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      { journey ? <JourneyDetail journey={ journey }/> : null }
      { journey ? <SelectedSeat number={ journey.autoSeat }/> : null }
    </main>
  )
};
