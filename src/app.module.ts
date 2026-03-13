import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { LostPetModule } from './lost-pet/lost-pet.module';
import { FoundPetModule } from './found-pet/found-pet.module';

@Module({
  imports: [EmailModule, LostPetModule, FoundPetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
