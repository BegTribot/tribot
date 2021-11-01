import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCommonCells from "./TableCommonCells";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import BorderlessTableCell from "./BorderlessTableCell";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    subTableTitle: {
        textAlign: 'center',
    },
});

export default function Row({
                                script,
                                rank,
                                stat,
                                statToRow,
                                subTitle = undefined,
                                subHeader = undefined,
                                statToSubRow = undefined
                            }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return <>
        <TableRow className={classes.root}>
            <TableCommonCells script={script} rank={rank} username={stat.username}/>
            {statToRow(stat)}
            {(subTitle || subHeader || statToSubRow) && <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>}
        </TableRow>
        {(subTitle || subHeader || statToSubRow) && <TableRow>
            <BorderlessTableCell variant="body" style={{paddingBottom: 0, paddingTop: 0}} colSpan={7}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div" className={classes.subTableTitle}>
                            {subTitle}
                        </Typography>
                        <Table size="small" aria-label={subTitle}>
                            <TableHead>
                                <TableRow>
                                    {subHeader}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {statToSubRow(stat)}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </BorderlessTableCell>
        </TableRow>}
    </>;
}