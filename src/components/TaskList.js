import React, { useEffect } from 'react';
import db from '../database/db';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    const sql = 'SELECT * FROM tasks';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Erro ao carregar tarefas', err.message);
      } else {
        setTasks(rows);
      }
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCompleteTasks = (taskId) => {
    const updateTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTasks);
    const sql = 'UPDATE tasks SET completed = ? WHERE id = ?';
    const updateValue = updateTasks.find(task => task.id === taskId).completed ? 1 : 0;
    db.run(sql, [updateValue, taskId], (err) => {
      if (err) {
        console.err('Erro ao atualizar tarefa:', err.message);
      }
    });
  }

  const handleRemoveTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.run(sql, [taskId], (err) => {
      if (err) {
        console.err('Erro ao apagar tarefa', err.message);
      }
    });
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={handleCompleteTasks}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
