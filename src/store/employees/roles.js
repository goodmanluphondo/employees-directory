import {createSlice} from "@reduxjs/toolkit";

const rolesSlice = createSlice({
    name: 'roles',
    initialState: [
        {
            id: "1",
            name: "Manager"
        },
        {
            id: "2",
            name: "Supervisor"
        },
        {
            id: "3",
            name: "Service Desk"
        }
    ],
    reducers: {}
});

export const rolesActions = rolesSlice.actions;
export default rolesSlice;
