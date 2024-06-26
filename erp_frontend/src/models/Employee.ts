import { SetStateAction } from "react";
import { Group } from "./Group";

export type Employee = {
    id: number;
    name: string;
    email: string;
}

export type EmployeeDetail = Employee & {
    groups: Group[]
}

export type ApiGetEmployees = {
    [x: string]: SetStateAction<Employee[]>;
    employee: Employee[]
}

export type ApiGetEmployee = EmployeeDetail;