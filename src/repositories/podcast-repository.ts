import fs from "fs";
import path from "path";
import { Podcast } from "../models/pocast-model";

const dataPath = path.join(__dirname, "../repositories/podcasts.json");
const podcastRepository = async (podcastName?: string): Promise<Podcast[]> => {
    const language = "utf-8";
    const data = fs.readFileSync(dataPath, language);
    let json: Podcast[] = JSON.parse(data);

    if (podcastName) {
        json = json.filter((podcast) =>
            podcast.name.toLowerCase().includes(podcastName.toLowerCase())
        );
    }

    return json;
};

export { podcastRepository };
