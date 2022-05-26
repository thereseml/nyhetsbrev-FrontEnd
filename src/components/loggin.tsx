import { ChangeEvent, useState } from "react";
import { logginUser } from "../models/logginUser";


export function Loggin () {

    const [newLoggin, setNewUser] = useState({
        email: "",
        passWord: "",
    });

    const [falseMessage, setFalseMessage] = useState(false);

    function handleLoggin(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewUser({...newLoggin, [name]: e.target.value})
    };

    function LogginUser() {

        let serchUser = new logginUser(newLoggin.email, newLoggin.passWord)

        console.log(newLoggin);
        
        
       fetch("http://localhost:3000/users/loggin", {
           method: "POST", 
           headers: { 
               Accept: "application/json",
               "content-type": "application/json" },
           body: JSON.stringify(serchUser) })
        .then(response => response.json())
        .then(users => {
            console.log(users);
            
            if (users !== "false") {
                localStorage.setItem("id", users);
                window.location.href = "/inlogged/";
            } else {
                setFalseMessage(true)
            }
        })
        .catch(error => {
            alert("Det gick inte att hitta epost eller lösenord!")
            console.log(error);
            
        })
    }

    return <>
        <h3>Logga in här!</h3>
        <form onSubmit={LogginUser}>
            <div>
                <input type="email" name="email" placeholder="E-post" value={newLoggin.email}  onChange={handleLoggin}/>
            </div>
            <div>
                <input type="password" name="passWord" placeholder="Lösenord" value={newLoggin.passWord}  onChange={handleLoggin}/>
            </div>

            <button type="submit">Logga in</button>
        </form>
        <div>
            {falseMessage && <p>Det gick inte att logga in!</p>}

        </div>

        <div>
            <a href="/">Gå tillbaka</a>
        </div>
    </>
}