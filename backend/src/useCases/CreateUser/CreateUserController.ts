import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        let id: string;
        
        try {
            await this.createUserUseCase.execute({
                id,
                name,
                email,
                password,
            })

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({ 
                error: err.message || 'Unexpected error.'
            });
        }
        
    }
}