import axios from "axios";

const instance = axios.create({
    baseURL: "https://reqres.in/api/"
});

export type ResponseType = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<EmployeeType>;
};

type EmployeeType = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const EmployeesAPI = {
    getEmployees() {
        return instance.get<ResponseType>("/users?per_page=12").then(res => res.data)
    }
};