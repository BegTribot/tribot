import React from 'react';
import PropTypes from 'prop-types';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';

function descendingComparator(a, b, orderBy) {
    let aValue = undefined, bValue = undefined;
    const keys = orderBy.split('.');
    for (let i = 0; i < keys.length; i++) {
        aValue = !aValue ? a[keys[i]] : aValue[keys[i]];
        bValue = !bValue ? b[keys[i]] : bValue[keys[i]];
    }
    if (bValue < aValue) {
        return -1;
    }
    if (bValue > aValue) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    console.log('array', array)
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    console.log('sorted array', stabilizedThis.map((el) => el[0]))
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead({classes, order, orderBy, headers, onRequestSort}) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    headers = [{id: 'rank', label: 'Rank'}, {id: 'user', label: 'User'}, ...headers];
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {headers.map((header, index) => (
                    <TableCell
                        key={header.id}
                        align={index === 0 ? 'left' : 'center'}
                        sortDirection={orderBy === header.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === header.id}
                            direction={orderBy === header.id ? order : 'asc'}
                            onClick={createSortHandler(header.id)}>
                            {header.label}
                            {orderBy === header.id ? (
                                <span
                                    className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function SortableTable({headers, rows, dataToRows}) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    /*const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);*/

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /*const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };*/

    /*const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);*/

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'small'}
                        aria-label="enhanced table">
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headers={headers}
                            rowCount={rows.length}/>
                        <TableBody>
                            {dataToRows(
                                stableSort(rows, getComparator(order, orderBy)
                                    /*.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*<TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />*/}
            </Paper>
        </div>
    );
}