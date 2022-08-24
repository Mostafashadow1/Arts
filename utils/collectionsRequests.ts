import { baseUrlCollection } from "./constant";

export const collectionsRequests = {
  fetchCollectionMonth: `${baseUrlCollection}/collections/30d`,
  fetchCollectionWeek: `${baseUrlCollection}/collections/7d`,
  fetchCollectionDay: `${baseUrlCollection}/collections/1d`,
};
