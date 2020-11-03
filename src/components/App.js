import React from 'react';
import Navbar from './Nav/Navbar';
import FirstImage from './FirstSlideShow';
import GridPhotos from './GridPhotos/GridPhotos';
import Series from './Series/Series.js';
import Series2 from './Series/Series2.js';
import ShortSeries from './Series/ShortSeries';
import ShortSeries2 from './Series/ShortSeries2';
import ShortSeries3 from './Series/ShortSeries3';
import Ads from './Ads/Ads';
import Langauge from './Language/Langauge';
import Genre from './Genre/Genre';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    
      
   
      <Navbar />
      
     
      <FirstImage/>
      <GridPhotos/>
      <Series/>
      <Series2/>
      <ShortSeries/>
      <ShortSeries2/>
      <ShortSeries3/>
      <Ads/>
      <Langauge/>
      <Genre/>
      
    </div>
  );
}

export default App;
