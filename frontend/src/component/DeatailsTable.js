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
import {useRef, useState} from "react";


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

function createData( day, time1, time2, time3, time4, time5, time6, time7, time8) {
    return { day, time1, time2, time3, time4, time5, time6, time7, time8 };
}

const useStyles = makeStyles({
    table: {
        width: "100%",
        overflowY: 'auto'
    },
});


export default function DetailTable({surfSpot}){

    const classes = useStyles();
    const rowsData = useRef();
    console.log(new Date(surfSpot?.surfData[0].time).toDateString())

    let today =0;
    let tmrw = 0;
    let datmrw = 0;


        const now = new Date().toDateString()
        // surfSpot.surfData.forEach((element) => {})
        for (let i = 0; i < surfSpot?.surfData.length; i++) {
            const surfDate = new Date(surfSpot?.surfData[i].time).toDateString()
            console.log(surfDate)
            if (now === surfDate) {
                today = today + 1;
            }
            if ((now + 1) === surfDate) {
                tmrw = tmrw + 1
            }
            if ((now + 2) === surfDate) {
                datmrw = datmrw + 1
            }
        }

        const rows2 = [
            createData(
            new Date(surfSpot?.surfData[0].time).toDateString(),
                surfSpot?.surfData[0].waveHeight.sg,
                surfSpot?.surfData[1].waveHeight.sg,
                surfSpot?.surfData[2].waveHeight.sg,
                surfSpot?.surfData[3].waveHeight.sg,
                surfSpot?.surfData[4].waveHeight.sg,
                surfSpot?.surfData[5].waveHeight.sg,
                surfSpot?.surfData[6].waveHeight.sg,
                surfSpot?.surfData[7].waveHeight.sg,
            )];

        console.log(today)
        console.log(tmrw)
        console.log(datmrw)



    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Day</StyledTableCell>
                        <StyledTableCell align="right">00:00 am</StyledTableCell>
                        <StyledTableCell align="right">03:00 am</StyledTableCell>
                        <StyledTableCell align="right">06:00 am</StyledTableCell>
                        <StyledTableCell align="right">12:00 pm</StyledTableCell>
                        <StyledTableCell align="right">15:00 pm</StyledTableCell>
                        <StyledTableCell align="right">18:00 pm</StyledTableCell>
                        <StyledTableCell align="right">21:00 pm</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row) => (
                        <StyledTableRow key={row.day}>
                            <StyledTableCell component="th" scope="row">
                                {row.day}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.time1}</StyledTableCell>
                            <StyledTableCell align="right">{row.time2}</StyledTableCell>
                            <StyledTableCell align="right">{row.time3}</StyledTableCell>
                            <StyledTableCell align="right">{row.time4}</StyledTableCell>
                            <StyledTableCell align="right">{row.time5}</StyledTableCell>
                            <StyledTableCell align="right">{row.time6}</StyledTableCell>
                            <StyledTableCell align="right">{row.time7}</StyledTableCell>
                            <StyledTableCell align="right">{row.time8}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}