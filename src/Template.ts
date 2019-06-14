class Template {
  constructor(props: ITemplateProps) {
    if (props.mode === Mode.dev) {
      // tslint:disable-next-line: no-console
      console.log('dev mode');
    }
  }
}

interface ITemplateProps {
  mode: Mode;
}

const enum Mode {
  dev = 'dev',
  prod = 'prod'
}

export default Template;
export { ITemplateProps, Mode };
