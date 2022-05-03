function mockMetricModel(dto: any) {
  this.data = dto;
  this.save = () => {
    return this.data;
  };
  this.find = (_params: any) => {
    return this.data;
  };
}

export { mockMetricModel };
