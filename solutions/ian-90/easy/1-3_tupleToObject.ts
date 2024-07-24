type SolTupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
}
