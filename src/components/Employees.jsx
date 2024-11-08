import {useSelector} from "react-redux";
import Employee from "./Employee.jsx";

export default function Employees({seniorEmployeeId}) {
    const employees = useSelector((state) => state.employees);
    return (
        <div>
            {employees.filter((employee) => employee.manager === seniorEmployeeId)?.map(subordinate => (
                <div key={subordinate.id}>
                    <Employee employee={subordinate} />
                    <div className="ml-4">
                        <Employees seniorEmployeeId={subordinate.id}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
