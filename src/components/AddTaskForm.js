import React, { useState } from 'react';
import db from '../database/db';

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
        db.run(sql, [title, description], (err) => {
            if (err) {
                console.error('Erro ao adicionar tarefa', err.message);
            } else {
                console.log('Tarefa adcionada com sucesso!');
                setTitle('');
                setDescription('');
            }
        });
    };

    return (
        <div>
            <h2>Adicionar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    );
};

export default AddTaskForm;
