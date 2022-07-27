import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GetJobsEachType } from "../../Shared/Models/Jobs";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../api/routePaths";

type EachJobPropsType = {
  data: GetJobsEachType;
  setFiltersState: {
    setStateFn: (newData: any) => void;
    stateValue: any;
  };
};

const EachJob = ({
  data,
  setFiltersState: { setStateFn: setFn, stateValue: value },
}: EachJobPropsType) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ my: 2 }}
    >
      <Grid item xs={10}>
        <Stack>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
          >
            {data.title}
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
          >
            <Button
              size="small"
              sx={{
                color: (theme) => theme.palette.info.dark,
              }}
              variant="text"
              startIcon={<ApartmentIcon />}
              onClick={() =>
                setFn({
                  ...value,
                  function: data.function,
                })
              }
            >
              {data.function.title}
            </Button>
            <Button
              size="small"
              sx={{
                color: (theme) => theme.palette.info.dark,
              }}
              variant="text"
              startIcon={<LocationOnIcon />}
              onClick={() =>
                setFn({
                  ...value,
                  location: data.location,
                })
              }
            >
              {data.location.city},{data.location.state}
            </Button>
            <Button
              size="small"
              sx={{
                height: "1.6rem",
                cursor: "default",
                bgcolor: (theme) =>
                  theme.palette.info.light,
                color: (theme) => theme.palette.info.dark,
                "&:hover": {
                  bgcolor: (theme) =>
                    theme.palette.info.main,
                },
              }}
              variant="contained"
            >
              {data.type.toUpperCase()}
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            onClick={() =>
              navigate(`${data.id}/` + routePaths.apply)
            }
          >
            Apply
          </Button>
          <Button
            variant="text"
            onClick={() => navigate(`${data.id}/`)}
            sx={{
              color: (theme) => theme.palette.info.dark,
            }}
          >
            View
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EachJob;
