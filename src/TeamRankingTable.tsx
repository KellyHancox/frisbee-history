import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Define the prop types for the component
interface teamType{
  id: string,
  name: string,
  year: string,
  location: string,
  competitionLevel: string,
  genderDivision: string,
  state: string,
  clubRegion: string,
  clubSection: string,
  wins: string,
  losses: string,
}

function createData(
  id: string,
  name: string,
  year: string,
  location: string,
  competitionLevel: string,
  genderDivision: string,
  state: string,
  clubRegion: string,
  clubSection: string,
  wins: string,
  losses: string,
) {
  return { id, name, year, location, competitionLevel,
    genderDivision, state, clubRegion, clubSection, wins, losses };
}

// id, name, year, location, competitionLevel, genderDivision, state, clubRegion, clubSection, wins, losses

function TeamRankingTable({teams}: any) {
    console.log('teams on the other side', teams)
    let rows: Array<teamType> = []

    for(let i=0; i<teams.length; i++){
      console.log('adding team: ', teams[i][0].name);
        rows.push(createData(teams[i][0].id, teams[i][0].name, teams[i][0].year, teams[i][0].location, teams[i][0].competitionLevel,
          teams[i][0].genderDivision, teams[i][0].state, teams[i][0].clubRegion, teams[i][0].clubSection, teams[i][0].wins, teams[i][0].losses))
    }

  console.log('rows is', rows)
    // teams.forEach((team : any) =>
    //   rows.push(createData(team.id, team.name, team.year, team.location, team.competitionLevel,
    //     team.genderDivision, team.state, team.clubRegion, team.clubSection, team.wins, team.losses))
    // )

    // console.log(players)
    // const rows: data[] = [];
    // for(var player in players.players){
    //     rows.push(createData(player[0], player[1], player[2],
    //         player[3], player[4], player[5], player[6], player[7], player[8]))
    // }

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table"
        size={ 'small'}>
        <TableHead>
        
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="center">Competition Level</TableCell>
            <TableCell align="left">Gender Division</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Club Region</TableCell>
            <TableCell align="center">Club Section</TableCell>
            <TableCell align="center">Wins</TableCell>
            <TableCell align="center">Losses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:teamType) => (
            <TableRow
              key={row.name}
              style={{
                height: 1
              }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="center">{row.competitionLevel}</TableCell>
              <TableCell align="left">{row.genderDivision}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.clubRegion}</TableCell>
              <TableCell align="center">{row.clubSection}</TableCell>
              <TableCell align="center">{row.wins}</TableCell>
              <TableCell align="center">{row.losses}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeamRankingTable;