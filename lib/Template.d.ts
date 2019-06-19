declare class Template {
  constructor(props: ITemplateProps);
}
interface ITemplateProps {
  mode: Mode;
}
declare const enum Mode {
  dev = 'dev',
  prod = 'prod'
}
export default Template;
export { ITemplateProps, Mode };
