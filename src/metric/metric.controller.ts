import { Controller, Get, Post, Query, Request } from '@nestjs/common';
import * as rawbody from 'raw-body';
import { Metric } from './metric-model.schema';
import { MetricService } from './metric.service';

@Controller('metric-model')
export class MetricController {
  constructor(private readonly metricModelService: MetricService) {}

  @Post('')
  async createMetrics(@Request() req) {
    const raw = await rawbody(req);

    const _rawBody = raw.toString().trim();

    return this.metricModelService.createMetrics(
      JSON.parse(_rawBody) as Metric,
    );
  }

  @Get('/date')
  async getMetricsByDate(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.metricModelService.getMetricsByDate(startDate, endDate);
  }

  @Get('')
  async getAllMetrics() {
    return this.metricModelService.getAllMetrics();
  }

  @Get('/latest')
  async getLatestMetrics() {
    return this.metricModelService.getLatestMetrics();
  }
}
