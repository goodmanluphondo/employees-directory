import ListEmployees from "./components/ListEmployees.jsx";
import AddEmployee from "./components/AddEmployee.jsx";

function App() {

    return (
        <div className="w-full max-w-6xl p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl text-center font-bold">
                Welcome to the
                {' '}
                <span className="border-b-4 border-yellow-500">
                    <span className="text-transparent bg-gradient-to-bl to-yellow-500 from-gray-200 bg-clip-text">
                        Employees
                    </span>
                </span>
                {' '}
                Directory
            </h1>
            <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ListEmployees />
                    <AddEmployee />
                </div>
            </div>
        </div>
    )
}

export default App;
