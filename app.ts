import * as http from "http";
import {
    getEpisodeList,
    getEpisodeListByName,
} from "./src/controllers/podcast-controller";
import { Routes } from "./src/routes/routes";
import { HttpMethod } from "./src/utils/http-methods";

export const app = async (
    req: http.IncomingMessage,
    res: http.ServerResponse
) => {
    const baseUrl = req.url?.split("?")[0];

    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getEpisodeList(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getEpisodeListByName(req, res);
    }
};
