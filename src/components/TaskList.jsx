import { useRecoilState, useRecoilValue } from 'recoil';
import { tasksState } from '../atoms/tasksAtom';
import { filteredTasksSelector } from '../selectors/filteredTasksSelector';

export default function TaskList() {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const filteredTasks = useRecoilValue(filteredTasksSelector);

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa adicionada ainda.</p>;
  }

  if (filteredTasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada para este filtro.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.text}</span>
          <div className="task-actions">
            <button type="button" onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button type="button" className="danger" onClick={() => removeTask(task.id)}>
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
