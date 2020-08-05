import {employeesAPI, EmployeeType} from "../dal/api";
import {Dispatch} from "redux";

const GET_EMPLOYEES = "Employees/employees-reducer/GET-EMPLOYEES";
const ADD_EMPLOYEE = "Employees/employees-reducer/ADD-EMPLOYEE";
const REMOVE_EMPLOYEE = "Employees/employees-reducer/REMOVE-EMPLOYEE";
const IS_FETCHING = "Employees/employees-reducer/IS-FETCHING";
const SET_ERROR = "Employees/employees-reducer/SET-ERROR";

const initialState = {
    employees: [] as Array<EmployeeType>,
    isFetching: false,
    error: ""
};

type initialStateType = typeof initialState;

const EmployeesReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state, employees: action.employees};
        case ADD_EMPLOYEE:
            return {...state, employees: [...state.employees, action.employee]};
        case REMOVE_EMPLOYEE:
            return {...state, employees: state.employees.filter(e => e.id !== action.employeeId)};
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }

};

type ActionType = GetEmployeesSuccessType |
    isFetchingType |
    SetErrorType |
    AddEmployeeSuccessType |
    RemoveEmployeeType;

type GetEmployeesSuccessType = { type: typeof GET_EMPLOYEES; employees: Array<EmployeeType> }
const getEmployeesSuccess = (employees: Array<EmployeeType>): GetEmployeesSuccessType => ({
    type: GET_EMPLOYEES,
    employees
});

type isFetchingType = { type: typeof IS_FETCHING; isFetching: boolean };
const isFetching = (isFetching: boolean): isFetchingType => ({type: IS_FETCHING, isFetching});

type SetErrorType = { type: typeof SET_ERROR; error: string };
const setError = (error: string): SetErrorType => ({type: SET_ERROR, error});

type AddEmployeeSuccessType = { type: typeof ADD_EMPLOYEE, employee: EmployeeType };
const addEmployeeSuccess = (employee: EmployeeType): AddEmployeeSuccessType => ({
    type: ADD_EMPLOYEE,
    employee
});

type RemoveEmployeeType = { type: typeof REMOVE_EMPLOYEE, employeeId: number };
const removeEmployee = (employeeId: number): RemoveEmployeeType => ({type: REMOVE_EMPLOYEE, employeeId});

export const getEmployees = () => async (dispatch: Dispatch<ActionType>) => {
    dispatch(isFetching(true));
    try {
        let res = await employeesAPI.getEmployees();
        dispatch(getEmployeesSuccess(res.data));
        dispatch(isFetching(false))
    } catch (e) {
        dispatch(setError("some error"));
        dispatch(isFetching(false));
    }
};

export default EmployeesReducer;