import {withStyles} from "@material-ui/core";
import MuiTableCell from "@material-ui/core/TableCell";

const BorderlessTableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

export default BorderlessTableCell;