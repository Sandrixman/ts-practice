import { FC } from "react";
import { useDispatch } from "react-redux";
import { Task, deleteTask } from "../../redux/tasksSlice";

interface TasksItemProps {
    task: Task;
}

const TasksItem: FC<TasksItemProps> = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <p>{task.taskText}</p>
            <button type="button" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
            </button>
        </li>
    );
};

export default TasksItem;
