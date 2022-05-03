export type PerformanceResourceTimingHandler = Pick<
  PerformanceResourceTiming,
  | 'name'
  | 'responseEnd'
  | 'initiatorType'
  | 'startTime'
  | 'duration'
  | 'transferSize'
>;
