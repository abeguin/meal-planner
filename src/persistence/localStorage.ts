import { nanoid } from "@reduxjs/toolkit"

export const save = (o: object): string => {
  const id = (o as Partial<{ id: string }>)?.id ?? nanoid()
  localStorage.setItem(id, JSON.stringify({ ...o, id }))
  return id
}

export const get = (key: string): object | undefined => {
  const stringItem = localStorage.getItem(key)
  if (stringItem) {
    return JSON.parse(stringItem)
  }
}
