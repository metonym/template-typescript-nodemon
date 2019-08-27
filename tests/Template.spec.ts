import Template from '../src';
import { Mode } from '../src/Template';

let template: Template | undefined;

describe('Template', () => {
  beforeEach(() => {
    template = undefined;
  });

  it('instantiates in `dev` mode', () => {
    // tslint:disable: no-console
    console.log = jest.fn();
    expect(console.log).not.toHaveBeenCalled();

    template = new Template({ mode: Mode.dev });

    expect(template).toBeInstanceOf(Template);
    expect(console.log).toHaveBeenCalled();
    // tslint:enable: no-console
  });
});
