import SeniorEmployee from "./SeniorEmployee.jsx";
import Employees from "./Employees.jsx";
import {useSelector} from "react-redux";

export default function ListEmployees() {
    const employees = useSelector((state) => state.employees);

    return (
        <div className="p-8 space-y-4 bg-gray-100">
            <h3 className="text-xl font-bold">List of employees</h3>
            {employees.filter((employee) => employee.manager === "")?.map(seniorEmployee => (
                <div key={seniorEmployee.id}>
                    <SeniorEmployee employee={seniorEmployee}/>
                    <div className="ml-4">
                        <Employees seniorEmployeeId={`${seniorEmployee.id}`}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
