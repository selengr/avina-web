export type TErrorBehaviour = {
  hasError?: boolean;
  errorText?: string;
};

export interface IPagination<T> {
  data: T;
  paginate: {
    currentPage: number;
    lastPage: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

// ------------------------------------------------------ usage
export interface IApiResponseWithPagination<T> {
  message: string;
  data: IPagination<T>;
}
export interface IApiResponseSuccess {
  message: string;
}

export interface IApiResponseWithData<T> {
  data: T;
}

// ------------------------------------------------------

export interface IApiResponse<T> {
  data: {
    data: T;
    paginate?: {
      currentPage: number;
      lastPage: number;
      total: number;
      next_page_url: string | null;
      prev_page_url: string | null;
    };
  };
  status: number;
  message: string;
  success: boolean;
}
