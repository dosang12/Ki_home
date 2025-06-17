import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Main from './components/Main';
import Intro from './components/Intro';
import Products from './components/Products';
import CS from './components/CS';


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Main />
          <Intro />
          <Products />
          <CS />
        </>
      )}
    </div>
  );
};

export default App;
