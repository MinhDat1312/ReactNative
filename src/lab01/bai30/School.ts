import { Student } from "../bai02";
import { Teacher } from "../bai27";

export class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("=== School Information ===");

        console.log("\nTeachers:");
        this.teachers.forEach(t => console.log(t));

        console.log("\nStudents:");
        this.students.forEach(s => console.log(s));
    }
}