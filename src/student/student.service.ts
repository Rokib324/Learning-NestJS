import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id: 1, name: 'Student 1', age: 20},
        {id: 2, name: 'Student 2', age: 21},
        {id: 3, name: 'Student 3', age: 22},
        {id: 4, name: 'Student 4', age: 23},
        {id: 5, name: 'Student 5', age: 24},
    ]
    getStudents(){
        return this.students;
    }
    //GET
    getStudentById(id:number){
        const student = this.students.find(student => student.id === id);
        if(!student) throw new NotFoundException('Student with this id does not exist');
        return student;
    }

    //POST
    createStudent(data: {name:string, age:number}){
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    //PUT
    updateStudent(id:number, data: {name:string, age:number}){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1) throw new NotFoundException('Student with this id does not exist');
        this.students[index] = {
            ...this.students[index],
            ...data,
        };
        return this.students[index];
    }

    //PATCH
    patchStudent(id:number, data: Partial <{name:string, age:number}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    //DELETE
    deleteStudent(id:number){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1) throw new NotFoundException('Student with this id does not exist');
        const deletedStudent = this.students.splice(index, 1);
        return {message: 'Student deleted successfully', student:deletedStudent[0] };
    }
}
