import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// todo[] ifadesiyle type belirliyoruz.
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // PayloadAction ifadesiyle yine gelen actionların yükünün tipini belirliyoruz.
    add: (state, action: PayloadAction<string>) => {
      const newTodos = {
        id: v4(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodos);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
//aşagıdaki yöntemle diğer companentlerden direkt olarak add veya remove methoduna ulaşabiliriz.
export const { add, remove, toggleCompleted } = todoSlice.actions;
