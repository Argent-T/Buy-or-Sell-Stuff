import React from "react";

const UserContext = React.createContext({
    loggedIn: false,
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
    listings: [],
    purchased: []
})

export default UserContext