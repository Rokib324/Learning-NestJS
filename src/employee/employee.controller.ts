import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployees(){
        return 'Employee controller for fetching employee data'
    }
}
