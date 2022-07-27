import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { axiosErrHandle } from "../../api/axiosHandle";
import { homePageFilterLookUps } from "../../Shared/Services/lookups";
import {
  GetLocationsListType,
  GetDepartmentsListType,
  GetFunctionsListType,
  GetLocationsEachType,
  GetDepartmentsEachType,
  GetFunctionsEachType,
} from "../../Shared/Models/LookUps";
import { getJobs } from "../../Shared/Services/getJobs";
import { GetJobsListType } from "../../Shared/Models/Jobs";
import { SortByName } from "../../Shared/Helpers/common";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EachJob from "../../Components/EachJob";

export default function JobsPage() {
  const [loadingDropDowns, setLoadingDropDowns] =
    useState(true);

  type listFiltersType = {
    locations: GetLocationsListType;
    departments: GetDepartmentsListType;
    functions: GetFunctionsListType;
  };
  const [filterLookUpsList, setFilterLookUpsList] =
    useState<listFiltersType>({
      locations: [],
      departments: [],
      functions: [],
    });

  type selectedFiltersType = {
    location: GetLocationsEachType | null;
    department: GetDepartmentsEachType | null;
    function: GetFunctionsEachType | null;
  };
  const [selectedFilters, setSelectedFilters] =
    useState<selectedFiltersType>({
      location: null,
      department: null,
      function: null,
    });

  const fetchLookUps = async () => {
    try {
      setLoadingDropDowns(true);
      const [
        getLocationsRes,
        getDepartmentsRes,
        getFunctionsRes,
      ] = await homePageFilterLookUps();
      setFilterLookUpsList({
        ...filterLookUpsList,
        locations: getLocationsRes,
        departments: getDepartmentsRes,
        functions: getFunctionsRes,
      });
    } catch (error) {
      return axiosErrHandle(error);
    } finally {
      setLoadingDropDowns(false);
    }
  };

  const [loadingJobsList, setLoadingJobsList] =
    useState(true);
  const [jobsList, setJobsList] = useState<GetJobsListType>(
    []
  );

  const fetchJobsList = async () => {
    try {
      setLoadingJobsList(true);
      const res = await getJobs();
      const sortedList = SortByName(res, "function.title");
      setJobsList(sortedList);
    } catch (error) {
      return axiosErrHandle(error);
    } finally {
      setLoadingJobsList(false);
    }
  };

  useEffect(() => {
    fetchLookUps();
    fetchJobsList();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#0000000d", p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{
                    ml: 1,
                    p: 1,
                    flex: 1,
                  }}
                  placeholder="Search for Job"
                  inputProps={{
                    "aria-label": "search for Job",
                  }}
                />
                <IconButton
                  sx={{ p: 2 }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                id="list-locations"
                disabled={loadingDropDowns}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id
                }
                getOptionLabel={(option) =>
                  option.title || ""
                }
                options={filterLookUpsList.locations}
                loading={!loadingDropDowns}
                sx={{
                  bgcolor: "background.paper",
                  "& input": {
                    width: "100% !important",
                    color: (theme) =>
                      theme.palette.getContrastText(
                        theme.palette.background.paper
                      ),
                  },
                  "& .MuiInputBase-root": {
                    display: "inline-flex",
                    flexWrap: "nowrap",
                  },
                }}
                value={selectedFilters.location}
                onChange={(e, val) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    location: val,
                  })
                }
                renderInput={(params) => (
                  <TextField
                    placeholder="Locations"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loadingDropDowns ? (
                            <CircularProgress
                              color="inherit"
                              size={20}
                            />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                id="list-departments"
                disabled={loadingDropDowns}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id
                }
                getOptionLabel={(option) =>
                  option.title || ""
                }
                options={filterLookUpsList.departments}
                loading={loadingDropDowns}
                sx={{
                  bgcolor: "background.paper",
                  "& input": {
                    width: "100% !important",
                    color: (theme) =>
                      theme.palette.getContrastText(
                        theme.palette.background.paper
                      ),
                  },
                  "& .MuiInputBase-root": {
                    display: "inline-flex",
                    flexWrap: "nowrap",
                  },
                }}
                value={selectedFilters.department}
                onChange={(e, val) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    department: val,
                  })
                }
                renderInput={(params) => (
                  <TextField
                    placeholder="Departments"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loadingDropDowns ? (
                            <CircularProgress
                              color="inherit"
                              size={20}
                            />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                id="list-functions"
                disabled={loadingDropDowns}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id
                }
                getOptionLabel={(option) =>
                  option.title || ""
                }
                options={filterLookUpsList.functions}
                loading={loadingDropDowns}
                sx={{
                  bgcolor: "background.paper",
                  "& input": {
                    width: "100% !important",
                    color: (theme) =>
                      theme.palette.getContrastText(
                        theme.palette.background.paper
                      ),
                  },
                  "& .MuiInputBase-root": {
                    display: "inline-flex",
                    flexWrap: "nowrap",
                  },
                }}
                value={selectedFilters.function}
                onChange={(e, val) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    function: val,
                  })
                }
                renderInput={(params) => (
                  <TextField
                    placeholder="Functions"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loadingDropDowns ? (
                            <CircularProgress
                              color="inherit"
                              size={20}
                            />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ bgcolor: "#fff", mt: 2 }}>
          <Stack spacing={2}>
            {jobsList.map((job, ind) => {
              const checkPrevFunctionTitle =
                job.function.id !==
                jobsList[ind - 1]?.function.id;

              return (
                <Box key={ind}>
                  {checkPrevFunctionTitle ? (
                    <>
                      <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        sx={{ mt: 3, fontWeight: 600 }}
                      >
                        {job.function.title}
                      </Typography>
                      <Box
                        sx={{
                          bgcolor: (theme) =>
                            theme.palette.primary.main,
                          height: "0.3rem",
                          width: "5rem",
                          mb: 4,
                        }}
                      />
                    </>
                  ) : null}
                  <EachJob
                    data={job}
                    setFiltersState={{
                      setStateFn: setSelectedFilters,
                      stateValue: selectedFilters,
                    }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
