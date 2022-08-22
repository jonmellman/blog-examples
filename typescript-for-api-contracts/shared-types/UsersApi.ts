export type GetUserApi = {
  PathParams: {
    userId: number
  }
  ResponseBody: User
  RequestBody: never
  QueryParams: never
};

export type GetUsersApi = {
  PathParams: never
  ResponseBody: User[]
  RequestBody: never
  QueryParams: never
};

export type User = {
  userId: number,
  name: string
};
