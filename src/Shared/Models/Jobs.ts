import {
  GetLocationsEachType,
  GetDepartmentsEachType,
  GetDivisionsEachType,
  GetFunctionsEachType,
} from "./LookUps";

export type GetJobsEachType = {
  id: number;
  code: string;
  title: string;
  description: string;
  type: string;
  positions: string;
  experience: string;
  salary: string;
  industry: string;
  location: GetLocationsEachType;
  department: GetDepartmentsEachType;
  division: GetDivisionsEachType;
  function: GetFunctionsEachType;
  postedDate: Date;
  closingDate: Date;
  hostedUrl: string;
  applyUrl: string;
};
export type GetJobsListType = Array<GetJobsEachType>;
