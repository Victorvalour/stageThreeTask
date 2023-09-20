import React from "react";
import { useState } from "react";
import Cars from './gallery.jsx'
import Database from './carDatabase.jsx'


export default function SearchBar() {
    const [query, setQuery] = useState('')
    const {cars} = Database
    
    console.log(Database[0].name)
return (
   <div></div>
)

}