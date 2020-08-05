import React from "react";
import {Route} from "react-router-dom";
import styles from "./Routes.module.css"
import Employees from "../Employess/Employees";

export const EMPLOYEES_PATH = "/employees";

const Routes = () => {
    return (
        <div className={styles.routes}>
            <Route path={EMPLOYEES_PATH} render={() => <Employees/>}/>
        </div>
    );
};

export default Routes;
