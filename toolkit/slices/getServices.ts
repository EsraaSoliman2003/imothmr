import axios from "@/lib/axios"; 
import { isAxiosError } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Service {
  serviceId: string;
  image: string;
  name: string;
  description?: string;
}

// ===========================
//   1) Async Thunk لجلب الخدمات
// ===========================


export const fetchServices = createAsyncThunk<
  Service[],
  void,
  { rejectValue: string }
>("services/fetchServices", async (_, thunkAPI) => {
  try {
    const res = await axios.get("Service");
    return res.data;
  } catch (err) {
    let errorMessage = "فشل تحميل الخدمات";
    if (isAxiosError(err)) {
      errorMessage = err.response?.data?.message || errorMessage;
    }
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// ===========================
//   2) Slice
// ===========================

interface ServicesState {
  data: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  data: [],
  loading: true,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "حدث خطأ غير معروف";
      });
  },
});

export default servicesSlice.reducer;
