import axios from "@/lib/axios";
import { isAxiosError } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HomeResponse } from "@/lib/dtos";


export const fetchHomeData = createAsyncThunk<
  HomeResponse,
  void,
  { rejectValue: string }
>("home/fetchHomeData", async (_, thunkAPI) => {
  try {
    const res = await axios.get("home");
    return res.data;
  } catch (err) {
    let errorMessage = "فشل تحميل بيانات الصفحة الرئيسية";
    if (isAxiosError(err)) {
      errorMessage = err.response?.data?.message || errorMessage;
    }
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// ==========================================
// 3) Slice
// ==========================================

interface HomeState {
  data: HomeResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  data: null,
  loading: true,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "حدث خطأ غير معروف";
      });
  },
});

export default homeSlice.reducer;
