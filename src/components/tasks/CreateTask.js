import { Button, Card, CardContent, makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { createTask } from "../../api/TasksApi";
import { taskTypes } from "../../constants/TaskTypes";

const useStyles = makeStyles(() => ({
    textField: {
        'marginBottom': 10
    },
    cardTitle: {
        marginBottom: 10
    }
}));

export default function CreateTask() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [type, setType] = useState('task');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            await createTask({ name, description, type });
        } catch (error) {
            console.log('handled errors', error.response);
        }
    }

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
                        >

                        </TextField>
                    </div>

                    <div>
                        <Button type='submit' variant='contained' color='primary'>
                            Create
                    </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
