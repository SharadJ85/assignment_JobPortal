import axios, { AxiosError, AxiosResponse } from "axios";

const axiosResHandle = <T>(res: AxiosResponse<T>) =>
  res.data;
const axiosResErr = <T>(res: AxiosError<T>) => res.message;
const axiosResErrNoRes = <T>(res: AxiosError<T>) =>
  res.message;
const errUnknown = (res: unknown) =>
  `Unknown Error: ${res}`;
const axiosErrHandle = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) axiosResErr(error);
    if (error.request) axiosResErrNoRes(error);
    return errUnknown(error);
  }
  return errUnknown(error);
};

export { axiosResHandle, axiosErrHandle };
