export default () => {
  if (navigator.geolocation) {
    const success = pos => {
      const crd = pos.coords;
      console.log(crd.latitude, crd.longitude);
    };
    navigator.geolocation.getCurrentPosition(success);
  } else {
    console.log("error");
  }
};
