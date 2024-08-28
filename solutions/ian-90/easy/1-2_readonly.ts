type SolReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
