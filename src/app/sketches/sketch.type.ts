import { IStyle } from './style.interface';

export type SketchParameters = () => unknown;
export type SketchGenerator = (style: IStyle, parameters: unknown) => string;
