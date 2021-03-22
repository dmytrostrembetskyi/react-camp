import { Button, Card, CardContent, makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getTask, updateTask } from "../../api/TasksApi";
import { taskTypes } from "../../constants/TaskTypes";

const useStyles = makeStyles(() => ({
    textField: {
        'marginBottom': 10
    },
    cardTitle: {
        marginBottom: 10
    }
}));

export default function EditTask() {


    const classes = useStyles();
    const [name, setName] = useState('');
    const [type, setType] = useState('task');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await updateTask({ name, description, type });
        } catch (error) {
            console.log('handled errors', error.response);
        }
    }

    useEffect(() => {

        (async () => {
            let task = await getTask(1); //TODO: change id

            if (task) {
                setName(task.title);
                setType(task.type);
                setDescription(task.description);
            }
        })()

    }, [])

    return (
        <Card>
            <CardContent>
                <Typography className={classes.cardTitle}>Create Task</Typography>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <TextField label='Name' variant="outlined" className={classes.textField}
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth>
                        </TextField>
                        <TextField label="Type" variant="outlined" className={classes.textField}
                            select
                            fullWidth
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            {
                                taskTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField label="Description" variant="outlined" className={classes.textField} fullWidth
                            multiline
                            rowsMax={4}
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        >

                        </TextField>
                    </div>

                    <div>
                        <Button type='submit' variant='contained' color='primary'>
                            Update
                    </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}