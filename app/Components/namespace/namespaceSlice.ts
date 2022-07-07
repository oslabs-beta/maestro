import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface NamespaceState {
    currentNamespace: string,
    allNamespaces: string[]
}
const initialState: NamespaceState = {
        currentNamespace: '',
        allNamespaces: []
    }
    

export const namespaceSlice = createSlice({
    name: 'namespace',
    initialState,
    reducers: {
        getAllNamespaces: (state, action: PayloadAction<string[]>) => {
            state.allNamespaces = action.payload
        },
        setCurrentNamespace: (state, action: PayloadAction<string>) => {
            state.currentNamespace = action.payload
        }
    },
    extraReducers: () => {

    }
})


export const { getAllNamespaces, setCurrentNamespace } = namespaceSlice.actions
export default namespaceSlice.reducer;

