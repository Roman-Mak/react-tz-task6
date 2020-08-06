import React from "react";

type PropsType = {
    id: number;
    firstName: string;
    lastName: string;
    removeEmployee: (id: number) => void;
};

const Employee = ({id, firstName, lastName, removeEmployee}: PropsType) => {
    return (
        <div>
            <span>{firstName} {lastName}</span>
            <button onClick={() => {removeEmployee(id)}} style={{marginLeft: "5px"}}>delete</button>
        </div>
    )
};

export default React.memo(Employee);