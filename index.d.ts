declare const ArrayRange: {
  (): number[];
  (end: number): number[];
  (start: number, end: number): number[];
  default: typeof ArrayRange;
};

export = ArrayRange;
