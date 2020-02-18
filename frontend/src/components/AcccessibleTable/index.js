import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '~/services/api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(status, name, location, doc, protein) {
  return { status, name, location, doc, protein };
}

export default function AcccessibleTable() {
  const [ans, setAns] = useState();

  useEffect(() => {
    loadConsulting();
  }, []);

  async function loadConsulting() {
    const response = await api.get('consultings', {
      params: {
        page: 1,
      },
    });

    const { data } = response.data;
    console.log(data);
    const newData = Object.keys(data).map(key => ({
      status: data[key].status,
      user: data[key].user,
    }));

    console.log(newData, typeof newData);
    setAns(newData);
    // console.log(ans);
  }

  const rows = [createData(1, 2, 3)];

  const classes = useStyles();
  // const [answer, setAnswer] = useState();

  // setAnswer(consult);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Localização&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
