type SolFirst<T extends any[]> = T extends [] ? never : T[0]; 
