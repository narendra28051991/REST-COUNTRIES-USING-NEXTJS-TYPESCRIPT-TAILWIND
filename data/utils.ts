export const joinArray = (arr: string[] | undefined, separator: string) => {
  if (!arr) return 'none';
  return arr.length > 1 ? arr.join(separator) : arr[0] || '';
};
