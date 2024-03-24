import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import TeamRankingTable from './TeamRankingTable';


function WomensClub() {
    // const [data, setData] = useState([]);
    let teams = require('./manyTeamsSample.json');

    // useEffect(() => {
    //     // fetch('http://127.0.0.1:1050/')
    //     // .then(response => response.json())
    //     // .then(json => setData(json))
    //     // .catch(error => console.error(error));
    //     setData(teams)
    // }, []);

  // console.log('data', data);
  
    return (
      <div>
        Women's club page
        {/* href to new page: https://play.usaultimate.org/teams/events/Eventteam/?TeamId=${datum[0]} */}
        {teams ?  <TeamRankingTable teams={teams}></TeamRankingTable>: 
        "Data not retrievable at this time. Please try again later"}
      </div>
    );
  }
  
  export default WomensClub;
  