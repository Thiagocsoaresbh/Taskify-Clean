import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAddTask({ title, description });
        setTitle('');
        setDescription('');
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
