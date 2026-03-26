import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';

export default function App() {
  return (
    <main className="container">
      <h1>Lista de Tarefas com Recoil</h1>
      <NewTaskForm />
      <TaskFilters />
      <TaskList />
    </main>
  );
}
