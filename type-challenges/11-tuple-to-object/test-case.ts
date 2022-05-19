import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// typeof  将ts转化为js
type r = typeof tuple; // type r = readonly ["tesla", "model 3", "model X", "model Y"]

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// 知识点
// as const  由 array =》 tuple 将array转换为tuple（readonly）