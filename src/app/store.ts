import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosReducer from '../modules/todos/todosSlice';
import authReducer from '../auth/authSlice';
import usersReducer from '../modules/users/usersSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
