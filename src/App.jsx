import React from 'react';
import Navbar from './components/Navbar';
import CountdownTimer from './components/Main';
import Main from './components/Main';
import Linklap from './components/Linklap';
import Whyjonus from './components/Whyjonus';
import ListenToThe from './components/ListenToThe';
import Fotter from './components/Fotter';

function App() {
  return (
    <div className='bg-blue-900'>
      <Navbar />
      <Main/>
      <Linklap/>
      <Whyjonus/>
      <ListenToThe/>
      <Fotter/>
    </div>
  );
}

export default App;
