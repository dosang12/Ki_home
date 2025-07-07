import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import GNB from './components/GNB/GNB';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import CS from './components/CS/CS';
import Footer from './components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <GNB/><Main/><Intro/><Products/><CS/><Footer/>
        </>
      )}
    </div>
  );
};

export default App;
