import { IStyle } from './style.interface';

export type SketchParametersGenerator = () => unknown;
export type SketchContentGenerator = (style: IStyle, parameters?: unknown) => string;

export interface SketchConfiguration {
    contentGenerator: SketchContentGenerator;
    parametersGenerator?: SketchParametersGenerator;
}
