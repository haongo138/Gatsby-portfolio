import Typography from 'typography';
import elkGlenTheme from 'typography-theme-elk-glen';

elkGlenTheme.headerFontFamily = ['Oswald', 'sans-serif'];
const typography = new Typography(elkGlenTheme);

export const { scale, rhythm, options } = typography;
export default typography;