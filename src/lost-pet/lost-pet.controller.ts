import { Body, Controller } from '@nestjs/common';
import { LostPetService } from './lost-pet.service';
import type { LostPetDTO } from 'src/core/interfaces/LostPetDTO.interface';

@Controller('lost-pet')
export class LostPetController {
    constructor(
        private readonly losPetService: LostPetService
    ){}

    async createLostPet(@Body() lostPet: LostPetDTO){
        const res = await this.losPetService.createLostPet(lostPet);
        return res;
    }
}
