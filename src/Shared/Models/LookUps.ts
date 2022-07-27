// locations
export type GetLocationsEachType = {
  id?: number;
  title?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
};
export type GetLocationsListType =
  Array<GetLocationsEachType>;

//   departments
export type GetDepartmentsEachType = {
  id?: number;
  title?: string;
};
export type GetDepartmentsListType =
  Array<GetDepartmentsEachType>;

//   divisions
export type GetDivisionsEachType = {
  id?: number;
  title?: string;
};
export type GetDivisionsListType =
  Array<GetDivisionsEachType>;

//   functions
export type GetFunctionsEachType = {
  id?: number;
  title?: string;
};
export type GetFunctionsListType =
  Array<GetFunctionsEachType>;
