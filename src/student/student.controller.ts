import { Controller, Get, Param, Post, Body, Put, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}

    @Get()
    getStudents(){
        return this.studentService.getStudents()
    }

    @Get(':id')
    getStudent(@Param('id') id:string){
        return this.studentService.getStudentById(Number(id))
    }

    //POST
    @Post()
    createStudent(@Body() data: {name:string, age:number}){
        return this.studentService.createStudent(data)
    }

    //PUT
    @Put(':id')
    updateStudent(@Param('id') id:string, @Body() data: {name:string, age:number}){
        return this.studentService.updateStudent(Number(id), data)
    }

    //PATCH
    @Patch(':id')
    patchStudent(@Param('id') id:string, @Body() data: Partial <{name:string, age:number}>){
        return this.studentService.patchStudent(Number(id), data)
    }

    //DELETE
    @Delete(':id')
    deleteStudent(@Param('id') id:string){
        return this.studentService.deleteStudent(Number(id))
    }
    
}
