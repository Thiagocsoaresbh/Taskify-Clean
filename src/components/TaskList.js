import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onCompleteTask, onRemoveTask }) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
