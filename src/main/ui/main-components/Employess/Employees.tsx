import React, {ChangeEvent} from "react";
import styles from "./Employees.module.css"
import {EmployeeType} from "../../../dal/api";
import Employee from "./Employee";

type PropsType = {
    employees: Array<EmployeeType>;
    isFetching: boolean;
    error: string;
    addENewEmployee: (firstName: string, lastName: string) => void;
    removeEmployee: (id: number) => void;
    newEmployeeFirstName: string;
    setNewEmployeeFirstName: (firstName: string) => void;
    newEmployeeLastName: string;
    setNewEmployeeLastName: (lastName: string) => void;
};

const Employees = ({
                       employees, addENewEmployee, removeEmployee, newEmployeeFirstName,
                       setNewEmployeeFirstName, newEmployeeLastName, setNewEmployeeLastName,
                       isFetching, error
                   }: PropsType) => {

    const onFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEmployeeFirstName(e.currentTarget.value);
    };

    const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEmployeeLastName(e.currentTarget.value);
    };

    const onAddEmployeeClick = () => {
        if (newEmployeeFirstName !== "" && newEmployeeLastName !== "") {
            addENewEmployee(newEmployeeFirstName, newEmployeeLastName);
            setNewEmployeeFirstName("");
            setNewEmployeeLastName("");
        }
    };

    return (
        <div className={styles.employees}>
            <div>
                <input type={"text"} placeholder={"employee first name"} onChange={onFirstNameChange}
                       value={newEmployeeFirstName}/>
                <input type={"text"} placeholder={"employee last name"} onChange={onLastNameChange}
                       value={newEmployeeLastName}/>
                <button onClick={onAddEmployeeClick}>add</button>
            </div>
            {
                isFetching
                    ? <span>Loading...</span>
                    : <div>
                        {employees.map(e => <Employee id={e.id} firstName={e.first_name}
                                                      lastName={e.last_name} removeEmployee={removeEmployee}/>)}
                    </div>
            }
            {error && <span>{error}</span>}
        </div>
    );
};

export default React.memo(Employees);
