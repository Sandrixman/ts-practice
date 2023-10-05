import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import * as SC from "./AddTaskForm.styled";

const AddTaskForm: FC = () => {
    const [taskText, setTaskText] = useState<string>("");
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTask(taskText));
        setTaskText("");
    };

    return (
        <SC.StyledForm onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="enter your task"
                value={taskText}
                onChange={(e) => {
                    setTaskText(e.target.value);
                }}
            />
            <button type="submit">Add task</button>
        </SC.StyledForm>
    );
};

export default AddTaskForm;
