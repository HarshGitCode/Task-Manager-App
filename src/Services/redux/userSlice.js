import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  loading: localStorage.getItem("loading") ? JSON.parse(localStorage.getItem("loading")):null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  tasks: [ {
      id: 1,
      title: "Design Homepage",
      description: "Create wireframes and final UI",
      status: "In Progress",
      createdAt: "2025-05-05",
      team: ["Alice", "Bob"],
      // todos: ["Wireframe header", "Wireframe footer"],xx 
      subtasks: ["Mockup buttons", "Pick color palette"],
    },]
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setTasks(state, value){
      state.tasks = value.payload;
    }
  },
});

export const { setUser, setLoading, setToken, setTasks } = userSlice.actions;

export default userSlice.reducer;