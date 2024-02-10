import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Grid, Item } from '@mui/material';
import BasicTable from './Table';

let team = require('./sampleTeam.json');
let teamData = team[0]

function TeamPage() {

    // const [teamData, setData] = useState([]);

    // const location = useLocation();
    // console.log(location);

    

    // useEffect(() => {
    //     setData(team[0])
    // }, []);
    // console.log(teamData.id)

    return (
        <Container style={{'margin-bottom':'15px'}}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Paper>
                        <h1>{teamData.name} ({teamData.year})</h1>
                        <p>
                            Location: {teamData.location}
                            <br />
                            Competition Level: {teamData.competitionLevel}
                            <br />
                            Divison: {teamData.genderDivision}
                            <br />
                            Facebook: <a href={teamData.facebook}>{teamData.facebook}</a>
                            <br />
                            Notes: {teamData.notes}
                            <br />
                            <a href={`https://play.usaultimate.org/teams/events/Eventteam/?TeamId=${teamData.id}`}>USUA Link</a>
                        </p>
                    </Paper>
                </Grid>
                <br />
                <Grid item xs={8}>
                    
                    <BasicTable players={teamData.players}/>
                    {/* {teamData.players?.map(player => player[0])} */}
                </Grid>


                <Grid item xs={4}>
                    <h3>Season Record: {teamData.seasonRecord}</h3>
                    Events:
                    {teamData.events && teamData.events.map(
                        event => <div key={event.name}>
                            <a href={event.link}>{event.name}</a>

                            {event.games.map(game =>
                                <div key={game.date + "/" + game.opponent}>
                                    <span className="mr-1">{game.date}</span>
                                    <span>  </span>
                                    <a href={game.scoreLink}>{game.score}</a>
                                    <span>  </span>
                                    <a hef={game.opponentLink}>{game.opponent}</a>
                                </div>
                            )}

                        </div>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default TeamPage;

{/* <ul>
            {teamData.players  && teamData.players.map(player => <li key={player[1]}>
                {/* Number: {player[0]}, Name: {player[1]}, Pronouns: {player[2]}, 
                Position: {player[3]}, Height: {player[4]}, Points: {player[5]}, 
                Assists: {player[6]}, Ds: {player[7]}, Turns: {player[8]} 
                player[1]
                </li>)
             </ul> */}