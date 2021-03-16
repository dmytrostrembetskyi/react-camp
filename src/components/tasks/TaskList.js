import { useEffect } from "react";
import { getPublicTasks } from "../../api/TasksApi";

export default function TaskList() {

    useEffect(() => {
        (async () => {
            await getPublicTasks();
        })()
    }, [])

    return (
        <>
            Task List
        </>
    );
}