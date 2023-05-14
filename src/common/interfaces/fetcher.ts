export interface IHeaders {
  [key: string]: string;
}

export interface IFetch {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  headers?: Headers | IHeaders;
  data?: any;
  params?: {
    [key: string]: string;
  };
}
