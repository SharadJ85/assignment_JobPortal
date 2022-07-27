import server from "../../api";
import { axiosResHandle } from "../../api/axiosHandle";
import { GetJobsListType } from "../Models/Jobs";

export const getJobs = () =>
  server
    .get<GetJobsListType>("/api/v1/jobs")
    .then((res) => axiosResHandle(res));
