import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Metric, MetricSchema } from './metric-model.schema';
import { MetricController } from './metric.controller';
import { MetricService } from './metric.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Metric.name, schema: MetricSchema }]),
  ],
  providers: [MetricService],
  controllers: [MetricController],
})
export class MetricModule {}
