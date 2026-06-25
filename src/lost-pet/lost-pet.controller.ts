import { Body, Controller, Get, Post } from '@nestjs/common';
import { LostPetService } from './lost-pet.service';
import type { LostPetDTO } from 'src/core/interfaces/LostPetDTO.interface';

@Controller('lost-pet')
export class LostPetController {
    constructor(
        private readonly losPetService: LostPetService
    ){}

    @Get()
    async getLostPets() {
        const res = await this.losPetService.getLostPets();
        return res;
    }

    @Post()
    async createLostPet(@Body() lostPet: LostPetDTO){
        const res = await this.losPetService.createLostPet(lostPet);
        return res;
    }
}
