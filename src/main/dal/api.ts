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

export type EmployeeType = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const employeesAPI = {
    getEmployees() {
        return instance.get<ResponseType>("/users?per_page=12").then(res => res.data)
    }
};