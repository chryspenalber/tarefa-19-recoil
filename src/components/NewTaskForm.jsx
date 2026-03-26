import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { tasksState } from '../atoms/tasksAtom';

export default function NewTaskForm() {
  const [text, setText] = useState('');
  const setTasks = useSetRecoilState(tasksState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
      },
    ]);

    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
