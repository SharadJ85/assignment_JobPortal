import server from "../../api";
import { axiosResHandle } from "../../api/axiosHandle";
import {
  GetLocationsListType,
  GetDepartmentsListType,
  GetDivisionsListType,
  GetFunctionsListType,
} from "../Models/LookUps";

export const getLocations = () =>
  server
    .get<GetLocationsListType>("/api/v1/locations")
    .then((res) => axiosResHandle(res));

export const getDepartments = () =>
  server
    .get<GetDepartmentsListType>("/api/v1/departments")
    .then((res) => axiosResHandle(res));

export const getDivisions = () =>
  server
    .get<GetDivisionsListType>("/api/v1/divisions")
    .then((res) => axiosResHandle(res));

export const getFunctions = () =>
  server
    .get<GetFunctionsListType>("/api/v1/functions")
    .then((res) => axiosResHandle(res));

export const homePageFilterLookUps = () => {
  return Promise.all([
    getLocations(),
    getDepartments(),
    getFunctions(),
  ]);
};
