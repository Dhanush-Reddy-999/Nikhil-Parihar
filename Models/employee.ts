import { Certificates } from "./certificates";
import { Skills } from "./skills";

export class Employee {

    employeeId!:number;
    firstName!:string;
    lastName!:string;
    email!:string;
    password!:string;
    role!:string;
    phoneNo!:string;
    bio!:string;
    creationDate!:string;
    recentLogin!:string;
    skills!:Skills[];
    certificates!:Certificates[]

}
