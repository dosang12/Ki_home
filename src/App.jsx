import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import GNB from './components/GNB/GNB';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import CS from './components/CS/CS';
import Qna from './components/Qna/Qna';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <GNB/><Main/><Intro/><Products/><CS/><Qna/>
        </>
      )}
    </div>
  );
};

export default App;
