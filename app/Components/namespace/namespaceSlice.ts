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

export const getNamespaces = createAsyncThunk<string[]>(
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
        setCurrentNamespace: (state, action: PayloadAction<string>) => {
            state.currentNamespace = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNamespaces.fulfilled, (state, action) => {
            state.allNamespaces = action.payload
        })
        // TO DO : add cases for pending, rejected
    }
})

export const { setCurrentNamespace } = namespaceSlice.actions
export default namespaceSlice.reducer;

