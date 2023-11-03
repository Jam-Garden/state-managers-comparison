import { atom } from "jotai";

export const countValue = atom(0)
export const doubleValue = atom(get => get(countValue) * 2)
