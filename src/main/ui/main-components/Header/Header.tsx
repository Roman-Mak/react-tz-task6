import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"
import {EMPLOYEES_PATH} from "../Routes/Routes";

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={EMPLOYEES_PATH}>Employees</NavLink>
        </div>
    );
};

export default Header;