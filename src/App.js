import './App.css';

import BestRest from './Components/BestRest';
import Footer from './Components/Footer';
import Navigate from './Components/Navigate';
import OffersBanner from './Components/OffersBanner';
import RestaurentChain from './Components/RestaurentChain';
import RestaurentOnline from './Components/RestaurentOnline';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigate />

      {/* Promotional Offers Banner */}
      <OffersBanner />

      {/* Restaurant Chains Section */}
      <RestaurentChain />

      {/* Online Restaurants Section */}
      <RestaurentOnline />

      {/* Best Rated Restaurants Section */}
      <BestRest />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

