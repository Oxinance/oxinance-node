import { AxiosResponse } from "axios";
declare class AlgoliaClient {
    constructor();
    search(query: string): Promise<AxiosResponse>;
}
export default AlgoliaClient;
