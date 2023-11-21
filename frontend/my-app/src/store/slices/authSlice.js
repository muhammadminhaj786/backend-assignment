import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.data;
      // console.log("fulfiled",action.payload);
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.data = {};
      console.log("rejected",action.payload.message);
    });
  },
});

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({objToSend,navigate}, { rejectWithValue }) => {
    const response = await axios.post(
      "http://localhost:3001/api/login",
      objToSend
    );

    if (response.data.status) {
      if(response.data.status==true){
        console.log('successfuly login')

        //store the values in cookies
        // Cookies.set('accessToken',response.data.token)

        localStorage.setItem("accessToken",response.data.token)
        navigate('/home')
    }else{
        alert(response.message)
        return rejectWithValue(response.data)
    }
      return response.data;
    } else {
      return rejectWithValue(response.data);
    }
  }
);

export default authSlice.reducer;
