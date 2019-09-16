declare const ArrayRange: {
  (end: number): number[];
  (start: number, end: number): number[];
  default: typeof ArrayRange;
};

export = ArrayRange;
