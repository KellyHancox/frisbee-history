import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

let team = require('./sampleTeam.json');
let teamData = team[0];

function TeamGamesTable() {
    
    return (
      <List sx={{width: '100%', maxWidth: 360, minWidth:'10rem', marginTop:"0px", paddingTop:"0px" }}
        // subheader={
        // <ListSubheader disableSticky={true}>
        // <h3 style={{height:"5rem", padding:"0px", margin:"0px"}}>Event Schedules and Scores<br/>
        // Season Record: {teamData.seasonRecord}
        // </h3>
        // </ListSubheader>}
        dense={true}
        >
        
      {teamData.events.map((event: any) =>
      <div className="Game-List-Item">
        <ListItem className="Game-Line-Item">
          <ListItemText
            primary={<a href={event.link}>{event.name}</a>}
          />
        </ListItem>
          {event.games.map((game:any) => 
            <ListItem className="Game-Line-Item">
              <ListItemText className="Game-List-Item-Text">
              <span>{game.date}</span>
              </ListItemText>
              <ListItemText className="Game-List-Item-Text">
              <a href={game.scoreLink}>{game.score}</a>
              </ListItemText>
              <ListItemText className="Game-List-Item-Text">
              <a href={game.opponentLink}>{game.opponent}</a>
              </ListItemText>
              
              </ListItem>)}
        </div>
      )}
    </List>

    )
}

// {event.games.map(game =>
//   <div key={game.date + "/" + game.opponent}>
//       <span className="mr-1">{game.date}</span>
//       <span>  </span>
//       <a href={game.scoreLink}>{game.score}</a>
//       <span>  </span>
//       <a hef={game.opponentLink}>{game.opponent}</a>
//   </div>
// )}

export default TeamGamesTable;