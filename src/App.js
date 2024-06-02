import React from 'react';
import FlexBoxContainer from './components/FlexBoxContainer';
import './App.css';


function App() {
  return (
    <><div className="container">
    <header className="header">Header</header>
    <div className="main">
      <aside className="sidebar">
          <div className='items'></div>
          <div className='items'>ss</div>
          <div className='items'>ssss</div>
        </aside>




      <section className="content">  
      <FlexBoxContainer />
      <FlexBoxContainer />
      <FlexBoxContainer />
 
      </section>
    </div> </div>
  

</> 
  );
}

export default App;