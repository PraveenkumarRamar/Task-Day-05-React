import React, { useState } from 'react'


export const profiles = React.createContext()
function Profiles({ children }) {
    let[users ,setUsers] = useState([
        {
            name:"PraveenRam",
            rollNo:"9U7811O",
            userName:"praveenram"
        },
        {
            name:"PraveenaRam",
            rollNo:"8U791O",
            userName:"praveenaram"
        },
        {
            name:"Ramar",
            rollNo:"99U441H",
            userName:"ramarvel"
        },
        {
            name:"Parimala",
            rollNo:"4U2861J",
            userName:"parimalaram"
        },
        {
            name:"Vishnu",
            rollNo:"2U48JVO",
            userName:"vishnuvel"
        },
        {
            name:"Vinitha",
            rollNo:"1U58ZXO",
            userName:"vinithavel"
        },
    ])
    return <>
        <profiles.Provider value={{ users, setUsers }} >
            {children}
        </profiles.Provider>
    </>
}

export default Profiles