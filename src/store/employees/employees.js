import {createSlice} from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: [
        {
            id: "1",
            name: "John Smith",
            role: "1",
            manager: "",
        },
        {
            id: "2",
            name: "Joe Smith",
            role: "2",
            manager: "1",
        },
        {
            id: "3",
            name: "John Doe",
            role: "3",
            manager: "2"
        },
        {
            id: "4",
            name: "Jane Doe",
            role: "3",
            manager: "2"
        },
        {
            id: "5",
            name: "Jim Jones",
            role: "3",
            manager: "1"
        }
    ],
    reducers: {
        addToList: (state, action) => {
            const newEmployee = action.payload;
            const lastEmployeeId = Math.max(...state.map(existingEmployee => parseInt(existingEmployee.id)), 0);
            newEmployee.id = (lastEmployeeId + 1).toString();
            state.push(newEmployee);
        },
        removeFromList: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice;
