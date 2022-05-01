import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { PerformanceResourceTimingHandler } from './types';

export type MetricDocument = Metric & mongoose.Document;

@Schema()
export class Metric {
  @Prop({ default: 0 })
  ttfb: number;

  @Prop({ default: 0 })
  fcp: number;

  @Prop({ default: 0 })
  domLoad: number;

  @Prop({ default: 0 })
  windowLoad: number;

  @Prop({ default: [] })
  resources: PerformanceResourceTimingHandler[];

  @Prop({ default: null })
  userAgent: string | null;

  @Prop({ default: null })
  url: string | null;

  @Prop({ type: Date, default: Date.now, required: false })
  createdAt: string;
}

export const MetricSchema = SchemaFactory.createForClass(Metric);
