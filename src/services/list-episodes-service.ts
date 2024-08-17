import { Podcast } from "../models/pocast-model";
import { ResponsePodcastDTO } from "../models/response.podcast-dto";
import { podcastRepository } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

let response: ResponsePodcastDTO = {
    statusCode: 0,
    body: [],
};

const listEpisodesService = async (): Promise<ResponsePodcastDTO> => {
    const data: Podcast[] = await podcastRepository();

    response.statusCode =
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    response.body = data;

    return response;
};

export { listEpisodesService };
