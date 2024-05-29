import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder.addCase('tasks/addTask', (state, action) => {
    state.push(action.payload);
  });
  builder.addCase('tasks/deleteTask', (state, action) => {
    return state.filter(task => task.id !== action.payload);
  });
  builder.addCase('tasks/toggleCompleted', (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase('filters/setStatusFilter', (state, action) => {
    state.status = action.payload;
  });
});

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];
//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };
