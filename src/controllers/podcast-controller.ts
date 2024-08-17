import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/list-episodes-service";
import { filterEpisodesService } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { ResponsePodcastDTO } from "../models/response.podcast-dto";

const DEFAULT_CONTENT = { "Content-type": ContentType.JSON };

const getEpisodeList = async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponsePodcastDTO = await listEpisodesService();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};

const getEpisodeListByName = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const url = req.url;
    const content = await filterEpisodesService(url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};

export { getEpisodeList, getEpisodeListByName };
