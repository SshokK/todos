export class FetchError extends Error {
  public data: unknown;
  public status: number;

  constructor(args: {
    data: FetchError['data'];
    status: FetchError['status'];
  }) {
    super('Request Error');

    this.status = args.status;
    this.data = args.data;
  }
}
