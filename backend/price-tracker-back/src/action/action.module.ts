import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionSchema } from './entities/action.entity';
import { ActionsController } from './action.controller';
import { ActionsService } from './action.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Action', schema: ActionSchema }]),
  ],
  controllers: [ActionsController],
  providers: [ActionsService],
  exports: [ActionsService, MongooseModule], 
})
export class ActionModule {}
