import { PetSize } from "../enums/PetSize.enum";

export interface FoundPetDTO {
    species: string,
    breed: string,
    color: string,
    size: PetSize,
    description: string,
    photo_url: string,
    finder_name: string,
    finder_email: string,
    finder_phone: string,
    location: {lat: number, lon: number}
    address: string
}