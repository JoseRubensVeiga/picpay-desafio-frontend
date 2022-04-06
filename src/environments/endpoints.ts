import { environment } from "./environment";

const baseURL = environment.baseURL;

export default {
  account: `${baseURL}/account`,
  tasks: `${baseURL}/tasks`,
};
