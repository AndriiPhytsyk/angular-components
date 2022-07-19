import { FilterPipePipe } from './tranform.pipe';

describe('TranformPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
