const deepFindObjectKeyValue = (obj: any, path: string) => {
  let paths = path.split("."),
    current = obj,
    i;
  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) undefined;
    else {
      current = current[paths[i]];
    }
  }
  return current;
};

export const SortByName = (
  list: Array<any>,
  deeperLevelObjectKeysUpToString: string = "title"
) =>
  list.sort((a, b) => {
    const nameA = deepFindObjectKeyValue(
      a,
      deeperLevelObjectKeysUpToString
    ).toUpperCase();
    const nameB = deepFindObjectKeyValue(
      b,
      deeperLevelObjectKeysUpToString
    ).toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
