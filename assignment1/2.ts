import users from "./users.json";
let filteredArray = users
    .filter(
        (elm) =>
            elm.address.geo.lat <= "-37.1496" &&
            elm.address.geo.lng >= "81.1496" &&
            elm.address.geo.lat <= "-68.6102" &&
            elm.address.geo.lng >= "62.5342"
    )
    .forEach((elm) => console.log(elm));