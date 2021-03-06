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
import React from "react";
import {getDirection} from "../service/surfSpotCalculationService";


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
        overflowY: "auto"
    },

    date:{
        fontSize: 9,
        borderRight: "black",
    }

});


export default function DetailTable({surfSpot}){

    const classes = useStyles();
    const rows = []

    surfSpot?.surfData.forEach(element => {

        rows.push(createData(new Date(element.time),
            new Date(element.time),
            element.swellHeight.sg,
            element.swellPeriod.sg,
            element.swellDirection.sg,
            element.windSpeed.sg,
            element.windDirection.sg))
    })

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Time (h)</StyledTableCell>
                        <StyledTableCell align="center">Wave height (m)</StyledTableCell>
                        <StyledTableCell align="center">Period (s)</StyledTableCell>
                        <StyledTableCell align="center">Wave Direction</StyledTableCell>
                        <StyledTableCell align="center">Wind Speed (km/h)</StyledTableCell>
                        <StyledTableCell align="center">Wind Direction</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.date}>
                            <StyledTableCell className={classes.date} component="th" scope="row" >{row.date.toDateString()}
                                </StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.date.toLocaleTimeString(navigator.language, {
                                hour: '2-digit',
                                minute:'2-digit'
                            })}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.height.toFixed(1)}</StyledTableCell>
                                <StyledTableCell align="center">{Math.round(row.period)}</StyledTableCell>
                                <StyledTableCell align="center">{getDirection(row.direction)}</StyledTableCell>
                                <StyledTableCell align="center">{Math.round(row.windspeed)}</StyledTableCell>
                                <StyledTableCell align="center">{getDirection(row.winddirection)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}