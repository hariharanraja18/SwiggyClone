import { createContext } from "react";

const UserContext= createContext({
    LoggedInUser: "defaultUser"
})
export default UserContext;