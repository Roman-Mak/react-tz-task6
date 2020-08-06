import employeesReducer, {
    addEmployeeSuccess,
    getEmployeesSuccess,
    isFetching,
    removeEmployeeSuccess,
    setError
} from "./employess-reducer";

let initialState = {
    employees: [
        {id: 1, first_name: "Roman", last_name: "Mak"},
        {id: 2, first_name: "Max", last_name: "Volkov"},
        {id: 3, first_name: "Ivan", last_name: "Petrov"}
    ],
    isFetching: false,
    error: ""
};

test("employees should be update", () => {
    let newEmployees = [
        {
            id: 1,
            first_name: "Andrey",
            last_name: "Brown"
        },
        {
            id: 2,
            first_name: "Andrey",
            last_name: "Brown"
        },
        {
            id: 3,
            first_name: "Andrey",
            last_name: "Brown"
        },
        {
            id: 4,
            first_name: "Andrey",
            last_name: "Brown"
        },
        {
            id: 5,
            first_name: "Andrey",
            last_name: "Brown"
        },
        {
            id: 6,
            first_name: "Andrey",
            last_name: "Brown"
        },
    ];
    let action = getEmployeesSuccess(newEmployees);
    let newState = employeesReducer(initialState, action);
    expect(newState.employees.length).toBe(newEmployees.length);
});

test("employee should be added", () => {
    let newEmployee = {
        id: 4,
        first_name: "Andrey",
        last_name: "Brown"
    };
    let action = addEmployeeSuccess(newEmployee);
    let newState = employeesReducer(initialState, action);
    expect(newState.employees.length).toBe(4);
});

test("length of employees should be smaller", () => {
    let action = removeEmployeeSuccess(3);
    let newState = employeesReducer(initialState, action);

    expect(newState.employees.length).toBe(2);
});

test("error message should be set", () => {
    let action = setError("some error");
    let newState = employeesReducer(initialState, action);

    expect(newState.error).toBe("some error");
});

test("isFetching should be change", () => {
    let action = isFetching(true);
    let newState = employeesReducer(initialState, action);

    expect(newState.isFetching).toBe(true);
});