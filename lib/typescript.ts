export type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never};
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// https://github.com/maninak/ts-xor/blob/master/src/types/Xor.type.ts

// interface A {
//   a: string
// }

// interface B {
//   b: string
// }

// ----------- Either A or B ! -----------
// let A_XOR_B: XOR<A, B>

// A_XOR_B = { a: '' }         // OK
// A_XOR_B = { b: '' }         // OK
// A_XOR_B = { a: '', b: '' }  // fails
// A_XOR_B = {}                // fails
