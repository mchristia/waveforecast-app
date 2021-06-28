import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles
} from "@material-ui/core";
import React, {useRef, useState} from "react";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(date, time, height, period, direction, windspeed, winddirection) {
    return { date, time, height, period, direction, windspeed, winddirection};
}

const useStyles = makeStyles({
    table: {
        width: "100%",
        overflowY: 'auto'

    },
});


export default function DetailTable({surfSpot}){

    const classes = useStyles();
    const rows = []
    console.log(surfSpot)
    console.log(new Date(surfSpot?.surfData[0].time).toDateString())

    surfSpot?.surfData.forEach(element => {

        rows.push(createData(new Date(element.time),
            new Date(element.time),
            element.swellHeight.sg,
            element.swellPeriod.sg,
            element.swellDirection.sg,
            element.windSpeed.sg,
            element.windDirection.sg))
    })
    console.log(rows)
    const now = Date.now()
    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Time</StyledTableCell>
                        <StyledTableCell align="right">Wave height</StyledTableCell>
                        <StyledTableCell align="right">Period</StyledTableCell>
                        <StyledTableCell align="right">Direction</StyledTableCell>
                        <StyledTableCell align="right">Wind Speed</StyledTableCell>
                        <StyledTableCell align="right">Wind Direction</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.date}>
                            <StyledTableCell component="th" scope="row" borderRight="black" borderStyle="solid">{row.date.toDateString()}
                                </StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.date.toLocaleTimeString(navigator.language, {
                                    hour: '2-digit',
                                    minute:'2-digit'
                                })}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.height}</StyledTableCell>
                                <StyledTableCell align="right">{row.period}</StyledTableCell>
                                <StyledTableCell align="right">{row.direction}</StyledTableCell>
                                <StyledTableCell align="right">{row.windspeed}</StyledTableCell>
                                <StyledTableCell align="right">{row.winddirection}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
