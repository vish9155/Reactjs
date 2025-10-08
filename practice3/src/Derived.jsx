import { useEffect, useState } from "react"

export default function Users() {

    let saved = JSON.parse(localStorage.getItem("data"));


    let [user, setuser] = useState(saved && saved.user ? saved.user : null);
    let [users, setusers] = useState(saved && saved.users ? saved.users : []);

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify({user,users}))
    },[user,users])

    function addUser() {

        setusers([...users, user]);

    }
    let total = users.length
    let last = users[users.length - 1]
    let unique = [...new Set(users)].length
    return (
        <>
            <input type="text" onChange={(event) => { setuser(event.target.value) }} />
            <br />
            <br />
            <button onClick={addUser}>Add</button>
            <br />
            <br />
            <h3>Total:{total}</h3>
            <h3>Last:{last}</h3>
            <h3>Unique:{unique}</h3>
            <div>
                {
                    users.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{`${index}:${item}`}</h1>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}