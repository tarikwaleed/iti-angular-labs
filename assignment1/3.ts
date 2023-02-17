
import { User } from "./user";
import users from "./users.json";
function location(arr: User[]): string[] {
    // arr[0].address.geo.lat
    return users.map(
        (elm) =>
            "https://maps.google.com/?q=" +
            elm.address.geo.lat +
            "," +
            elm.address.geo.lng
    );
}

console.log(location(users));