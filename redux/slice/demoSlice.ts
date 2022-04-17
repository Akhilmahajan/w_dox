import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import LoadingState from '../../interfaces/LoadingState'

interface IDemoState {
  name: string | null;
  status: LoadingState
}

const initialState: IDemoState = {
  name: 'demo',
  status: LoadingState.IDLE
}

export const setNameAsync = createAsyncThunk('demo/setName', async (name: string) => {
  return name
})

const demoSlices = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    clearName: (state) => {
      state.name = null
    },
  }, extraReducers: (builder) => {
    builder
      .addCase(setNameAsync.pending, (state, action) => {
        state.status = LoadingState.LOADING
      })
      .addCase(setNameAsync.rejected, (state, action) => {
        state.status = LoadingState.IDLE
      })
      .addCase(setNameAsync.fulfilled, (state, action) => {
        state.status = LoadingState.IDLE
        state.name = action.payload
      })
  }
})

export const { clearName } = demoSlices.actions
export default demoSlices.reducer
