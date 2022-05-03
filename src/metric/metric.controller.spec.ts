import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { API_DATA } from '../__mocks__/api-data';
import { mockMetricModel } from '../__mocks__/metric';
import { Metric } from './metric-model.schema';
import { MetricController } from './metric.controller';
import { MetricService } from './metric.service';

describe('MetricController', () => {
  let controller: MetricController;
  let service: MetricService;
  console.log('');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricController],
      providers: [
        MetricService,
        {
          provide: getModelToken(Metric.name),
          useValue: mockMetricModel,
        },
      ],
    }).compile();

    controller = module.get<MetricController>(MetricController);
    service = module.get<MetricService>(MetricService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('metricAPI methods', () => {
    it('should return all metrics', async () => {
      const metrics = [...API_DATA] as Metric[];
      jest.spyOn(service, 'getAllMetrics').mockResolvedValue(metrics);
      expect(await controller.getAllMetrics()).toEqual(metrics);
    });

    it('should return latest metrics', async () => {
      const metrics = [...API_DATA] as Metric[];
      jest
        .spyOn(service, 'getLatestMetrics')
        .mockResolvedValue(
          metrics
            .sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
            .slice(0, 10),
        );
      expect(await controller.getLatestMetrics()).toEqual(metrics);
    });

    it('should return metrics by date', async () => {
      const startDateTimeStamp = new Date(Date.now() - 1000 * 60 * 60)
        .getTime()
        .toString();
      const endDateTimestamp = new Date().getTime().toString();

      const metrics = [...API_DATA] as Metric[];

      jest.spyOn(service, 'getMetricsByDate').mockResolvedValue(metrics);
      expect(
        await controller.getMetricsByDate(startDateTimeStamp, endDateTimestamp),
      ).toEqual(metrics);
    });

    it('should create metrics', async () => {
      const metric = {
        ...API_DATA[0],
        createdAt: new Date().getTime().toString(),
      };

      jest.spyOn(service, 'createMetrics').mockReturnValue(undefined);

      expect(await controller.createMetrics(metric)).toEqual(undefined);
    });
  });
});
