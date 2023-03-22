import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRepos = createAsyncThunk(
  'repo/fetchRepos',
  async function (findRepo, { rejectWithValue, dispatch }) {
    const api = 'https://api.github.com/search/repositories?q=';

    try {
      const response = await fetch(`${api}/${findRepo}`);
      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();
      dispatch(getRepos(data));
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchProjectById = createAsyncThunk(
  'projects/fetchProjectById',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`, {
        headers: {
          'User-Agent': 'request',
          'Content-Type': 'application/json'
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const repoSlice = createSlice({
  name: 'repos',
  initialState: {
    repos: [],
    user: {},
    isLoading: false,
  },
  reducers: {
    getRepos(state, action) {
      state.repos.push(action.payload);
    },
  },
  extraReducers: build => {
    build.addCase(fetchProjectById.pending, state => {
      state.isLoading = true;
    });
    build.addCase(fetchProjectById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    build.addCase(fetchProjectById.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

const { getRepos } = repoSlice.actions;

export default repoSlice.reducer;
