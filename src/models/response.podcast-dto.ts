import { Podcast } from "./pocast-model";

export interface ResponsePodcastDTO {
    statusCode: number;
    body: Podcast[];
}
