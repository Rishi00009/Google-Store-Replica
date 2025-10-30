
import Fitbit from './Fitbit';
import Wearables from './Wearables';
import Hero from './Hero';
import Arrivals from './Arrivals';
import Compare from './Compare';
import Watch4 from './Watch4';


export default function WatchesAndTrackers () {
  return (
    <div className="App"> 
      <Fitbit />
      <Hero />
      <Wearables />
      <Arrivals />
      <Compare />
      <Watch4 />
    
    </div>
  );
}

