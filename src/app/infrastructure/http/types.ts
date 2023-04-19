export interface Response<ResponseType> {
  page: number;
  results: ResponseType;
  total_pages: number;
  total_results: number;
}
