import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {addEmployee, getEmployees, removeEmployeeSuccess} from "../../../bll/employess-reducer";
import Employees from "./Employees";

const EmployeesContainer = () => {
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    const [newEmployeeFirstName, setNewEmployeeFirstName] = useState<string>("");
    const [newEmployeeLastName, setNewEmployeeLastName] = useState<string>("");

    const dispatch = useDispatch();
    const employees = useSelector((state : AppStateType) => state.employees.employees);
    const isFetching = useSelector((state: AppStateType) => state.employees.isFetching);
    const error = useSelector((state: AppStateType) => state.employees.error);

    const addENewEmployee = useCallback((firstName: string, lastName: string) => {
        dispatch(addEmployee(firstName, lastName));
    }, [dispatch]);

    const removeEmployee = useCallback((id: number) => {
        dispatch(removeEmployeeSuccess(id))
    }, [dispatch]);

    useEffect(() => {
        if (isFirstRender) {
            dispatch(getEmployees());
            setIsFirstRender(false);
        }
    }, [isFirstRender, dispatch]);

    return (
        <Employees employees={employees} addENewEmployee={addENewEmployee} removeEmployee={removeEmployee}
                   isFetching={isFetching} error={error}
                   newEmployeeFirstName={newEmployeeFirstName} setNewEmployeeFirstName={setNewEmployeeFirstName}
                   newEmployeeLastName={newEmployeeLastName} setNewEmployeeLastName={setNewEmployeeLastName}/>
    );
};

export default EmployeesContainer;
