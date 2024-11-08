import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputError from "./custome/InputError.jsx";
import {employeesActions} from "../store/employees/employees.js";

export default function AddEmployee() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [manager, setManager] = useState("");
    const [errors, setErrors] = useState({});

    const roles = useSelector(state => state.roles);
    const employees = useSelector((state) => state.employees);

    const reset = () => {
        setName("");
        setRole("");
        setManager("");
    }

    const submit = (event) => {
        event.preventDefault();
        setErrors({});

        const validationErrors = {};

        if (name.trim() === "") {
            validationErrors["name"] = "Name is required";
        }

        if (role.trim() === "") {
            validationErrors["role"] = "Role is required";
        }

        if (manager.trim() === "") {
            validationErrors["manager"] = "Manager is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        dispatch(employeesActions.addToList({
            name: name,
            role: role,
            manager: manager,
        }));

        reset();
    }

    return (
        <div className="p-8 space-y-4 bg-gray-100">
            <h3 className="text-xl font-bold">Add a new employee</h3>
            <div>
                <form onSubmit={submit}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="flex flex-col gap-2">
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="py-1 px-4 bg-white border border-gray-200 rounded-md shadow-sm"
                                />
                            </label>
                            {errors?.name && <InputError>{errors?.name}</InputError>}
                        </div>

                        <div>
                            <label className="flex flex-col gap-2">
                                Role:
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="py-2 px-4 bg-white border border-gray-200 rounded-md shadow-sm"
                                >
                                    <option value="" disabled>Select a role</option>
                                    {roles?.length && roles?.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            {errors?.role && <InputError>{errors?.role}</InputError>}
                        </div>

                        <div>
                            <label className="flex flex-col gap-2">
                                Manager:
                                <select
                                    value={manager}
                                    onChange={(e) => setManager(e.target.value)}
                                    className="py-2 px-4 bg-white border border-gray-200 rounded-md shadow-sm"
                                >
                                    <option value="" disabled>Select a manager</option>
                                    {employees.map(manager => (
                                        <option key={manager.id} value={manager.id}>
                                            {manager.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            {errors?.manager && <InputError>{errors?.manager}</InputError>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="py-2 px-3 inline-flex items-center justify-center gap-2 font-medium text-sm text-white rounded-md bg-black hover:bg-black/80"
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
