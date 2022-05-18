// interface类型遍历
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}