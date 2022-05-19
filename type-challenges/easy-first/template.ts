// 第一种
// type First<T extends any[]> = T extends [] ? never : T[0]


// 第二种
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 第3种
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 第4种
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;


// 知识点
// extends 类型条件判断
// inter 推断


type age = [1, 2, 3]
type des1 = age[number] // type r = 3 | 1 | 2
type empty = []
type des2 = empty[number] // type des2 = never