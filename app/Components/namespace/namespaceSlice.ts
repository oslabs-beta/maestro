import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { response } from 'express';

interface NamespaceState {
  currentNamespace: string,
  allNamespaces: string[]
}

const initialState: NamespaceState = {
  currentNamespace: '',
  allNamespaces: []
}

// Potentially add 'loading' property to state

export const getNamespacesForState = createAsyncThunk<string[]>(
  'namespace/getNamespaces',
  async (_, thunkAPI) => {
    const res = await window.electron.getNamespaces()
    return res
  }
);

export const namespaceSlice = createSlice({
  name: 'namespace',
  initialState,
  reducers: {
    setCurrentNamespace: (state:any, action: PayloadAction<string>) => {
      state.currentNamespace = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNamespacesForState.fulfilled, (state, action) => {
      state.allNamespaces = action.payload
    })
    builder.addCase(getNamespacesForState.pending, (state, action) => {
      state.allNamespaces = action.payload
    })
    builder.addCase(getNamespacesForState.rejected, (state:any, action) => {
      state.error = action.error.message
    })
  }
})

export const { setCurrentNamespace } = namespaceSlice.actions
export default namespaceSlice.reducer;

