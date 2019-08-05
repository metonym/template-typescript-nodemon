const enum Mode {
  dev = 'dev',
  prod = 'prod'
}

class Template {
  constructor(props: ITemplateProps) {
    if (props.mode === Mode.dev) {
      // tslint:disable-next-line: no-console
      console.log('dev mode');
    }
  }
}

export interface ITemplateProps {
  mode: Mode;
}

export default Template;
export { Mode };
