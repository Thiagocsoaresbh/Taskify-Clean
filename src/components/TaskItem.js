import React from 'react';

const TaskItem = ({ task, onCompleteTask, onRemoveTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onCompleteTask(task.id)}
            />
            <span>{task.title}</span>
            <p>{task.description}</p>
            <button onClick={() => onRemoveTask(task.id)}>Remover</button>
        </li>
    );
};

export default TaskItem;
