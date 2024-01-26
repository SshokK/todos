export class FetchError extends Error {
  public data: unknown;
  public status: number;
  public description?: string;

  constructor(args: {
    data: FetchError['data'];
    status: FetchError['status'];
  }) {
    super('Request Error');

    this.status = args.status;
    this.data = args.data;

    if (this.data && typeof this.data === 'object' && 'message' in this.data) {
      this.description = Array.isArray(this.data.message)
        ? this.data.message.join(', ')
        : String(this.data.message);
    }
  }
}
