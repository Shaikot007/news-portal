import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    currentArticle: null,
  },
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },
    setSingleNews: (state, action) => {
      state.currentArticle = action.payload;
    },
    addNews: (state, action) => {
      state.articles.unshift(action.payload);
    },
    editNews: (state, action) => {
      const index = state.articles.findIndex(a => a.id === action.payload.id);
      if (index !== -1) state.articles[index] = action.payload;
    },
    deleteNews: (state, action) => {
      state.articles = state.articles.filter(a => a.id !== action.payload);
    }
  },
});

export const { setNews, setSingleNews, addNews, editNews, deleteNews } = newsSlice.actions;
export default newsSlice.reducer;