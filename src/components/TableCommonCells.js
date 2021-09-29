import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import React from "react";

export default function TableCommonCells({script, rank, username}) {
    const scriptLink = script.toLowerCase().replace(" ", "%20");
    return (
        <>
            <TableCell align="center">{rank}</TableCell>
            {username !== '*' &&
            <TableCell align="left"><Link target={'_blank'}
                                          href={`https://fast-brook-30426.herokuapp.com/api/scripts/signatures/${scriptLink}/` + username + '.png'}>{username}</Link></TableCell>
            }
            {username === '*' && <TableCell align="left">******</TableCell>}
        </>
    );
}