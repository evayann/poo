export function toRgb(cssColor: string, normalize: boolean = true): number[] {
    const fakeEl = document.createElement('div');
    fakeEl.style.color = cssColor;

    document.body.appendChild(fakeEl);
    const rgbString = getComputedStyle(fakeEl).getPropertyValue('color');
    fakeEl.parentNode?.removeChild(fakeEl);

    const rgb: number[] = rgbString
        .replace(/[^\d,]/g, '')
        .split(',')
        .map((v) => +v);

    return normalize ? rgb.map((v: number) => v / 255) : rgb;
}
