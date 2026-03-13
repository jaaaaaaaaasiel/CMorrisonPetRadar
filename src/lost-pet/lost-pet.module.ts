import { Module } from '@nestjs/common';
import { LostPetService } from './lost-pet.service';

@Module({
  providers: [LostPetService]
})
export class LostPetModule {}
