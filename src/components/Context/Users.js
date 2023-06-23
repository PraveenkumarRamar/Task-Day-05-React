import React, {useState } from 'react'


export const user = React.createContext();

function Users({children}) {
    // console.log(children)
    let [data,setData]  = useState([
        {
            name:"Praveen",
            age:22,
            gender:"male",
            role:"Fresher",
            qualification:"B.tech",
            From : "Salem",
            mobile:"8220956441"
        },
        {
            name:"Ramar",
            age:55,
            gender:"male",
            role:"Admin",
            qualification:"MCA",
            From : "Salem",
            mobile:9944681628
        },
        {
            name:"Parimala",
            age:38,
            gender:"Fe-male",
            role:"House-wife",
            qualification:"B.sc",
            From : "Thedavur",
            mobile:899956441
        },
        {
            name:"PraveenaRam",
            age:17,
            gender:"Fe-male",
            role:"Student",
            qualification:"12",
            From : "Salem",
            mobile:9977665544
        },
        {
            name:"Kalai",
            age:20,
            gender:"Fe-male",
            role:"Student",
            qualification:"11",
            From : "Salem",
            mobile:8234455676
        }
    ])
    return <>
    <user.Provider value={{data,setData}}>
        {children}
    </user.Provider>
    </>
}

export default Users