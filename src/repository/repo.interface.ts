export interface Repo<T> {
  query(): Promise<T[]>;
  queryId(_id: string): Promise<T>;
  search(_query: { key: string; value: unknown }): Promise<T[]>;
  create(_info: Partial<T>): Promise<T>;
  update(_info: Partial<T>): Promise<T>;
  destroy(_id: string): Promise<void>;
}
