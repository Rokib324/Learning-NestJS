import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [
        {id: 1, name: 'John Doe', age: 20},
        {id: 2, name: 'Jane Doe', age: 21},
        {id: 3, name: 'John Smith', age: 22},
    ];

    getCustomers(): Customer[] {
        return this.customers;
    }
    addCustomer(createCustomerDto: CreateCustomerDto): Customer {
        const newCustomer : Customer = {
            id: Date.now(),
            ...createCustomerDto,
        };
        this.customers.push(newCustomer);
        return newCustomer;
        }
    
}
