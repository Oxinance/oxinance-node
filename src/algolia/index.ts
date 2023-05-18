import instance from "../axios";
import {AxiosResponse} from "axios";

class AlgoliaClient {
    public constructor() { }

    public search(query : string) : Promise<AxiosResponse> {
        return instance.get(`/v1/algolia/search?query=${query}`);
    }
}

export default AlgoliaClient;