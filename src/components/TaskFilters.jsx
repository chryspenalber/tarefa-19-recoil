import { useRecoilState } from 'recoil';
import { filterState } from '../atoms/filterAtom';

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'completed', label: 'Concluídas' },
  { value: 'pending', label: 'Pendentes' },
];

export default function TaskFilters() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div className="task-filters">
      {FILTERS.map((item) => (
        <button
          key={item.value}
          type="button"
          className={filter === item.value ? 'active' : ''}
          onClick={() => setFilter(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
