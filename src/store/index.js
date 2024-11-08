import {configureStore} from "@reduxjs/toolkit";
import employeesSlice from "./employees/employees.js";
import rolesSlice from "./employees/roles.js";

const store = configureStore({
    reducer: {
        roles: rolesSlice.reducer,
        employees: employeesSlice.reducer,
    }
})

export default store;
