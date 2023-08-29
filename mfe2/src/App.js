import React from 'react';

// import './App.css';

const MFE1Button = React.lazy(() => import('MFE1/App'));

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <React.Suspense fallback='Loading Button'>
          <MFE1Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
