import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { getUserById } from './services/userApi';
import type { UserInfo } from './types/user';

// Define the state shape
interface UserState {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for fetching user data
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id: string, { rejectWithValue }) => {
    try {
      const userData = await getUserById(id);
      return userData;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch user');
    }
  }
);

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Synchronous actions if needed
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser, clearError } = userSlice.actions;
export default userSlice.reducer;