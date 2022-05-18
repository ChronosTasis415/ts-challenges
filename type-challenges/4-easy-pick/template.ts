// ts 联合类型union遍历
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};