import React from "react";

const UserContext = React.createContext({
    id: "",
    username: "",
    password: "",
    first: "",
    last: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    listings: []
})

export default UserContext