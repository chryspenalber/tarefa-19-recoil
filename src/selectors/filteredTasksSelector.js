import { selector } from 'recoil';
import { tasksState } from '../atoms/tasksAtom';
import { filterState } from '../atoms/filterAtom';

export const filteredTasksSelector = selector({
  key: 'filteredTasksSelector',
  get: ({ get }) => {
    const tasks = get(tasksState);
    const filter = get(filterState);

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }

    return tasks;
  },
});
