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

function createData( day, calories, fat, carbs, protein) {
    return { day, calories, fat, carbs, protein };
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

    const [dayAndTime, setDayAndTime] = useState({
        today: 0,
        tomorrow: 0,
        dayaftertmrw: 0,
    })
    // const rows2 = () =>{
    //     const now = new Date().toDateString()
    //      for(let i=0; i < surfSpot?.surfData.length; i++){
    //          const surfDate = new Date(surfSpot?.surfData[i].time).toDateString()
    //         if(now === surfDate){
    //             setDayAndTime(daytime.map(item => item.today +1))
    //         }
    //         if((now+1) > surfDate){
    //             setDayAndTime(daytime.map(item => item.tomorrow +1))
    //         }
    //         if((now+2) > surfDate){
    //             setDayAndTime(daytime.map(item => item.dayaftertmrw +1))
    //         }
    //      }
    //
    // }

    const rows = [
        createData(new Date(surfSpot?.surfData[0].time).toDateString(), 159, 6.0, 24, 4.0),
        createData("06", 237, 9.0, 37, 4.3),
        createData("06", 262, 16.0, 24, 6.0),
        createData("06", 305, 3.7, 67, 4.3),
        createData("06", 356, 16.0, 49, 3.9),
    ];

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.day}>
                            <StyledTableCell component="th" scope="row">
                                {row.day}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}