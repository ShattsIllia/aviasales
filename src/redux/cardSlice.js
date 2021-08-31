import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../API/axios';

export const getApiToken = createAsyncThunk(
    'cards/getApiTokenStatus', 
    async () => {
        const response = await axios.get('/search');
        localStorage.setItem('token', response.data.searchId)
        return response.data
    }
);
export const getAllCards = createAsyncThunk (
    'cards/getAllCardsStatus', 
    async () => {
        const token = localStorage.getItem('token');
        const response =  await axios.get(`tickets?searchId=${token}`);
            // if (response.status === 200) {
            return response.data.tickets;
            // }    
            // } catch(e) {
            //     alert(e);
    }
);

export const cardSlice = createSlice({
    name: 'card',
    initialState:{ 
        token: [],
    },
    reducers: {},
    extraReducers: {
        [getApiToken.fulfilled]: (state, action) => {
            state.token = action.payload;
        },
    }
});

export default cardSlice.reducer;
