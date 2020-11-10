// This function will get the users current location using the navigation geolocation buit in functionality
export function userLocation(setMapCoords) {
  navigator.geolocation.getCurrentPosition((position) => {
    let region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setMapCoords(region);
  });
}
