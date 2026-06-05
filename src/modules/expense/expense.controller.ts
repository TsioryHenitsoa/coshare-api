import { Controller } from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { Post, Body, Req } from "@nestjs/common";
import { CreateExpenseDto } from "./dto/create-expense.dto";


@Controller('expenses')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService) {}

    @Post()
    create(@Body() dto: CreateExpenseDto, @Req() req : any) {
        const userId = req.user.id;
        return this.expenseService.createExpense(dto, userId);
    }
}