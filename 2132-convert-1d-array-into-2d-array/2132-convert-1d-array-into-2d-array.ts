function construct2DArray(original: number[], m: number, n: number): number[][] {
    return original.length===m*n?(new Array(m)).fill(0).map((_,i)=>original.slice(i *n,(i+1)*n)):[];
};