import { ChangeEvent, useState } from "react"
import { INewUser } from "../models/INewUser"
import { Users } from "../models/Users";

export function Register () {

    const [trueNewsLetter, setTrueNewsletter] = useState(false);

    const [newUser, setNewUser] = useState<INewUser>({
        firstName: "",
        lastName: "",
        email: "",
        passWord: "",
        newsLetter: trueNewsLetter,
    });

    const [registerDone, setRegisterDone] = useState(false);

    function handleNewsLetter() {
        setTrueNewsletter(true)
    }

    function handleUser(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewUser({...newUser, [name]: e.target.value})
    };

    function registerUser() {

        let newUserRegister = new Users(newUser.firstName, newUser.lastName, newUser.email, newUser.passWord, newUser.newsLetter)
        
       fetch("http://localhost:3000/users/add", {
           method: "POST", 
           headers: { 
               Accept: "application/json",
               "content-type": "application/json" },
           body: JSON.stringify(newUserRegister) })
        .then(response => response.json())
        .catch(error => {
            alert("Det gick inte att registrera en ny användare!")
            console.log(error);
            
        })

        setRegisterDone(true)
    }


    return <>
        <h3>Registrera dig här!</h3>
        <form onSubmit={registerUser}>
            <div>
                <input type="text" name="firstName" placeholder="Förnamn" value={newUser.firstName} onChange={handleUser}/>
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Efternamn" value={newUser.lastName}  onChange={handleUser}/>
            </div>
            <div>
                <input type="email" name="email" placeholder="E-post" value={newUser.email}  onChange={handleUser}/>
            </div>
            <div>
                <input type="password" name="passWord" placeholder="Lösenord" value={newUser.passWord}  onChange={handleUser}/>
            </div>
            <div>
                Prenumerera på vårt nyhetsbrev? 
                <div>
                    <label>
                    Ja tack! 
                    <input type="checkbox" checked={trueNewsLetter} onChange={handleNewsLetter}/>
                    </label>
                </div>
            </div>
            <button type="submit">Registera</button>
        </form>
        <div>
        {registerDone && <p>Det gick att registrera!</p>}
        </div>

        <div>
            <a href="/">Gå tillbaka</a>
        </div>
    </>
}