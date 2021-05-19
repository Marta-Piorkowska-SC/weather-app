import {GEOLOCATION_CITY_NAME_ERROR} from "./types";
import {startLoading} from "./startLoading";
import {endLoading} from "./endLoading";


const success = (pos) => dispatch => {
  const crd = pos.coords;
  let lat = crd.latitude.toString();
  let lon = crd.longitude.toString();
  console.log(lat);
  console.log(lon);
  dispatch(startLoading())
}

const errors = (err) => dispatch => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  dispatch(
    {
      type: GEOLOCATION_CITY_NAME_ERROR,
      error: true,
    }
  )
  dispatch(endLoading())
}



export const getLocation = () => async (dispatch) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  if (navigator.geolocation) {
    const result = await navigator.permissions
      .query({ name: "geolocation" })

    if (result.state === "granted") {
      navigator.geolocation.getCurrentPosition((pos) => dispatch(success(pos)), undefined, options);
    } else if (result.state === "prompt") {
      navigator.geolocation.getCurrentPosition((pos) => dispatch(success(pos)), err => dispatch(errors(err)), options);
    } else if (result.state === "denied") {
      alert("Odmówiłeś podania swojej obecnej pozycji");
    }
  } else {
    alert("Nie można pobrać twojej obecnej pozycji");
  }
}
