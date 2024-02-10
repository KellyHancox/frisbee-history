import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Define the prop types for the component
interface data{
    no: string,
  player: string,
  pronouns: string,
  position: string,
  height: string,
  points: string,
  assists: string,
  ds: string,
  turns: string,
}

function createData(
  no: string,
  player: string,
  pronouns: string,
  position: string,
  height: string,
  points: string,
  assists: string,
  ds: string,
  turns: string,
) {
  return { no, player, pronouns, position,
height, points, assists, ds, turns };
}

// const rows = [
//     createData("0", "Amanda Alexander", "S", "", "", "", "", "", ""),	 
//     createData("2","Amanda Becker", "S", "", "", "", "", "", ""),
//     createData("3","Anna Browne", "S", "", "", "", "", "", ""),	 
//      createData("4", "Danielle DeRoseau", "S", "", "", "", "", "", ""),	 
//      createData("6","Maeve Devlin", "S", "", "", "", "", "", ""),	 
//      createData("7", "Acacia Farber-Krug", "S", "", "", "", "", "", ""),	 
//      createData("8", "Keira Hale", "S", "", "", "", "", "", ""),	 
//      createData("1","Martha Hale", "", "", "", "", "", "", ""), 
//      createData("9","Jordan Hudgins", "S", "", "", "", "", "", ""),	 
//      createData("10","Kelly Jones", "S", "", "", "", "", "", ""),	 
//      createData("11","Anna Kilbourn", "S", "", "", "", "", "", ""),	 
//      createData("13","Ashley Krebs", "S", "", "", "", "", "", ""),	 
//      createData("14","Kara Ladle", "S", "", "", "", "", "", ""),	 
//      createData("15","Allison Lofgren", "S", "", "", "", "", "", ""),	 
//      createData("15","Darya Lollos", "", "", "", "", "", "", ""),
//      createData("15","Kiersten Olsen", "S", "", "", "", "", "", ""),	 
//      createData("15","Rebecca Ostman", "", "", "", "", "", "", ""),	 
//      createData("15","Sophie Pebbles", "S", "", "", "", "", "", ""),	 
//      createData("15","Jordyn Polito", "S", "", "", "", "", "", "")	 ,
//      createData("15","Lauren Quiroga", "S", "", "", "", "", "", ""),	 
//      createData("15","Anne Reader", "S", "", "", "", "", "", ""),
//      createData("15","Jordan Rosefigura", "S", "", "", "", "", "", ""),	 
//      createData("15","Kayla Sippin", "", "", "", "", "", "", ""),
//      createData("15","Ariel Stepniak", "S", "", "", "", "", "", ""), 
//      createData("15","Sophie Stewart", "S", "", "", "", "", "", ""),
//      createData("15","Yewande Taiwo", "S", "", "", "", "", "", "")	 	
// ];
const rows = [];

function BasicTable({players}) {
    console.log(players)
    const rows: data[] = [];
    for(var player in players.players){
        rows.push(createData(player[0], player[1], player[2],
            player[3], player[4], player[5], player[6], player[7], player[8]))
    }

    console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table"
        size={ 'small'}>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="left">Player</TableCell>
            <TableCell align="center">Pronouns</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="center">Height</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Assists</TableCell>
            <TableCell align="center">Ds</TableCell>
            <TableCell align="center">Turns</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:data) => (
            <TableRow
              key={row.player}
              style={{
                height: 1
              }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.player}
              </TableCell>
              <TableCell align="center">{row.pronouns}</TableCell>
              <TableCell align="left">{row.position}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.assists}</TableCell>
              <TableCell align="center">{row.ds}</TableCell>
              <TableCell align="center">{row.turns}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;