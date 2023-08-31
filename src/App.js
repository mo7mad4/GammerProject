import { Suspense } from 'react';
import Router from './router';

function App() {
  return (
    <div className='app'>
      <Suspense fallback='Loading....'>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
