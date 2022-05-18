type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// keyof arrey -> 索引
const tuple = ['a', 'b', 'c', 'd'];

type r = TupleToObject<typeof tuple>
// 遍历map T in K
// 遍历array  T[number]