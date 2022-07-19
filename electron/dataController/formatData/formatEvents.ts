export const formatEvents = (arr: string[]) => {
  arr.pop();
  const trimmed: string[][] = arr.map((el: string) => el.split(/[ ]{2,}/));
  const headers: string[] = trimmed[0].map((el) =>
    el.toLowerCase().replace(" ", "_")
  );
  trimmed.shift();
  return trimmed.map((row: string[]) => {
    let obj: {} = {};
    row.forEach((r: string, i: number) => {
      (obj as any)[headers[i]] = row[i];
    });
    return obj;
  });
};
