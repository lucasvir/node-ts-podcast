import { podcastRepository } from "../repositories/podcast-repository";
import { ResponsePodcastDTO } from "../models/response.podcast-dto";
import { StatusCode } from "../utils/status-code";

let response: ResponsePodcastDTO = {
    statusCode: 0,
    body: [],
};

const filterEpisodesService = async (
    podcastName: string | undefined
): Promise<ResponsePodcastDTO> => {
    const nameFromQuery = podcastName?.split("?p=")[1] || "";
    const data = await podcastRepository(nameFromQuery);

    response.statusCode =
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    response.body = data;

    return response;
};

export { filterEpisodesService };
