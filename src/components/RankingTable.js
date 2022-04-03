import React, {useEffect} from "react";
import axios from "axios";
import {SERVER} from "../App";
import Loading from "./Loading";
import EmptyData from "./EmptyData";
import Ranking from "../routes/Ranking";
import SortableTable from "./SortableTable";
import {convertToKebabCase} from "../utils";

export default function RankingTable({
                                         name, storeId, free = false, disabled = false, headers,
                                         comparator = undefined, dataToRows
                                     }) {
    const [isFetching, setFetching] = React.useState(true);
    const [stats, setStats] = React.useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        setFetching(true);
        axios.get(SERVER + '/scripts/stats/beg ' + name.toLowerCase())
            .then(response => {
                setStats(response.data);
                setFetching(false);
            })
            .catch(e => {
                console.log(e);
                setFetching(false);
            });
    };

    return <Ranking name={name} storeId={storeId} free={free} disabled={disabled}>
        {isFetching && <Loading/>}
        {!isFetching && stats.length === 0
        && <EmptyData/>}
        {!isFetching && stats.length > 0
        && <SortableTable headers={headers} comparator={comparator} rows={stats} dataToRows={dataToRows}/>}
    </Ranking>;
}
