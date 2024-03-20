import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "../slice/servicesSlice";
import serviceDetailSlice from "../slice/serviceDetailSlice";

const store = configureStore({
    reducer: {
        services: servicesSlice,
        serviceDetail: serviceDetailSlice
    }
})

export default store