import { baseUrlCollection } from "./constant";
export const salesRequests = {
  fetchSalesMonth: `${baseUrlCollection}/sales/30d`,
  fetchSalesWeek: `${baseUrlCollection}/sales/7d`,
  fetchSalesDay: `${baseUrlCollection}/sales/1d`,
};
