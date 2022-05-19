type Length<T extends readonly any[]> = T["length"]


// 知识点
// tuple 规定类型
// tuple的length是定死的  tuple['length'] 为特定的值
// array的length是不定的 array['length'] 为number