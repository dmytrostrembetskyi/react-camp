import { Button, Card, CardContent, Grid, makeStyles, TextField } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import { useEffect } from "react";
import { getPublicTasks } from "../../api/TasksApi";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        marginTop: 10
    }
});

export default function TaskList() {
    const classes = useStyles();
    const [taskList, setTaskList] = useState([]);
    const [pageSize] = useState(5);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [containsTitle, setContainsTitle] = useState('');

    const handlePageChange = (event, value) => {
        console.log(event);
        setPage(value);
    };

    useEffect(() => {
        (async () => {
            let result = await getPublicTasks({ pageSize, page, containsTitle });
            setTaskList(result.items);
            setCount(result.count);
        })()
    }, [page, pageSize, containsTitle])

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="baseline">
                <Button component={Link} to="/tasks/create" variant="contained" color="primary">Create</Button>
                <TextField size="small" label="search by title" variant="outlined" onChange={e => setContainsTitle(e.target.value)}></TextField>
                <Pagination page={page} count={Math.ceil(count / pageSize)} onChange={handlePageChange}></Pagination>
            </Grid>
            {taskList.map((task) =>
                <div key={task.id}>
                    <Card className={classes.card}>
                        <CardContent>
                            {task.title}
                        </CardContent>
                    </Card>
                </div>)}
        </>
    );
}