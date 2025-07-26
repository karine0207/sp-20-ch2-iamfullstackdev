
import { useState } from 'react';

const InputCreate = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: task }),
      });

      if (response.ok) {
        setTask('');
        alert("✅ Tarea creada correctamente");
      } else {
        alert("❌ Error al crear tarea");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error en la conexión");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "0.5rem", width: "60%" }}
      />
      <button type="submit" style={{ marginLeft: "1rem" }}>
        Crear tarea
      </button>
    </form>
  );
};

export default InputCreate;
