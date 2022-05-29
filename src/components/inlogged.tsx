import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ISubscribers } from "../models/ISubscribers";


export function Inlogged () {

    const [users, setUsers] = useState<ISubscribers[]>([]);
    const [newsletter, setNewsLetter] = useState(false)
    let { id } = useParams();

    let usersID = id;

findanyUser()

function findanyUser() {
    let findLS = localStorage.getItem("id");
    if(!findLS) {
        alert("Det gick inte att logga in, prova igen!")
        window.location.href = "/loggin/";
    } else {

    }
}

useEffect(() => {

    fetch(`http://localhost:5000/users/loggedin/`)
        .then(response => { return response.json()})
        .then(data => {
            setUsers(data)
        });

}, [])
    
    function changeNewsLetter() {

        if(newsletter === false) {
            setNewsLetter(true)
        } else {
            setNewsLetter(false)
        }

        let changeUser = {
            _id: usersID,
            newsLetter: newsletter, 
        }

        fetch("http://localhost:5000/users/acceptnews", {
           method: "PUT", 
           headers: { 
               Accept: "application/json",
               "content-type": "application/json" },
           body: JSON.stringify(changeUser) })
        .then(response => response.json())
        .then(users => {

        })
        .catch(error => {
        })
        
        setTimeout(function(){
            window.location.reload()
        }, 5000);
  
    }

   let UsersFromApi = users.map((users: ISubscribers) => {

        if (usersID === users._id) {

            return (<div key={users._id}>
                <h4>{users.firstName} {users.lastName}</h4>
                {(users.newsLetter === true)? <><p>Du prenumerar på nyhetsbrevet!</p> <button onClick={changeNewsLetter}>Sluta prenumerera!</button></>:
                <> <p>Du prenumerar inte på nyhetsbrevet!</p> <button onClick={changeNewsLetter}>Börja prenumerera!</button></>}


            </div>)
        }
    })


    function loggOut() {
        localStorage.clear();
        window.location.href = "/loggin/";
    }

    return <><h2>Välkommen!</h2>

            {UsersFromApi}

            <button onClick={loggOut}>Logga ut!</button>

    </>
    
}