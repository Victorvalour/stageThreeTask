import React from "react";
import Gallery from "../components/gallery.jsx";
import AuthDetails from "../components/auth/AuthDetails.jsx";
import SearchBar from "../components/searchbar.jsx";

export default function Home() {
return (
    <div>
        <AuthDetails />
        <SearchBar />
<Gallery />
</div>
)

}