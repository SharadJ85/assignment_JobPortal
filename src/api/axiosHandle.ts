import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axiosResHandle = <T>(res: AxiosResponse<T>) =>
  res.data;
const axiosResErr = <T>(res: AxiosError<T>) => {
  toast.error(res.message);
  return res.message;
};
const errUnknown = (res: unknown) => {
  const err = `Unknown Error: ${res}`;
  toast.error(err);
  return err;
};

const axiosErrHandle = (error: unknown) => {
  if (
    axios.isAxiosError(error) &&
    (error.response || error.request)
  )
    axiosResErr(error);
  else errUnknown(error);
};

export { axiosResHandle, axiosErrHandle };
