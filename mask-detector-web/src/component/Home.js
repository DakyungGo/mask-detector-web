import React from 'react';
import IsMaskOn from './IsMaskOn';
import WeekRecord from './WeekRecord';
import CovidStatistics from './CovidStatistics';
import News from './News';

function Home(){
    return (
    <div>
       <IsMaskOn />
       <WeekRecord />
       <div>
           <CovidStatistics />
           <News />
       </div>
    </div>);
}

export default Home;