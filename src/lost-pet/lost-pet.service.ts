import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LostPet } from 'src/core/db/entities/lost-pet.entity';
import { Repository } from 'typeorm';
import { LostPetDTO } from 'src/core/interfaces/LostPetDTO.interface';


@Injectable()
export class LostPetService {
    constructor(
        @InjectRepository(LostPet)
        private readonly lostPetRepository: Repository<LostPet>
    ){ }
    
    async createLostPet(lostPet: LostPetDTO): Promise<Boolean>{
        try {
            const newPet = this.lostPetRepository.create({
            name: lostPet.name,
            species: lostPet.species,
            breed: lostPet.breed,
            color: lostPet.color,
            size: lostPet.size,
            description: lostPet.description,
            photo_url: lostPet.photo_url,
            owner_name: lostPet.owner_name,
            owner_email: lostPet.owner_email,
            owner_phone: lostPet.owner_phone,
            location: {
                type: 'Point',
                coordinates: [lostPet.location.lon, lostPet.location.lat]
            
            },
            address: lostPet.address
        });

        await this.lostPetRepository.save(newPet);
        return true;
        } catch (error) {
            return false;
        }
        
    }
}
