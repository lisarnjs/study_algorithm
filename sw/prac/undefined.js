const object1 = {
  repo: undefined,
};

const object2 = {
  repo: {
    read: undefined,
  },
};

const object3 = {
  repo: {
    read: {
      extend: "md",
      content: "금융",
    },
  },
};

const safeGet = (obj, str) => {
  const splitStr = String.prototype.split.call(str, ".");
  if (splitStr.length === 1) return obj[splitStr[0]];
  const [zeroStr, ...elseStr] = splitStr;
  return safeGet(obj[zeroStr], elseStr);
};

console.log(safeGet(object2, "repo.read"));
