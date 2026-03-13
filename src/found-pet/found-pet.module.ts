import { Module } from '@nestjs/common';
import { FoundPetService } from './found-pet.service';

@Module({
  providers: [FoundPetService]
})
export class FoundPetModule {}
