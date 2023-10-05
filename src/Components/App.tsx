import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Form from "./AddTaskForm/AddTaskForm";
import TasksItem from "./TasksItem/TasksItem";

function App() {
    const tasks = useSelector((state: RootState) => state.tasks);

    return (
        <>
            <Form />
            <ul>
                {tasks.map((task) => {
                    return <TasksItem key={task.id} task={task} />;
                })}
            </ul>
        </>
    );
}

export default App;
