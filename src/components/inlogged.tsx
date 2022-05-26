import { userInfo } from "os";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { INewUser } from "../models/INewUser";

export function Inlogged () {
    const [users, setUsers] = useState("");
    const [userID, setUserId] = useState(0);
    const [storedUser, setStoredUser] = useState(0);
    let params = useParams();


    useEffect(() => {

        fetch(`http://localhost:5000/users/loggin/` + params.id)
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            console.log(data.firstName);
            
            
        });

        if(params.id) {
            setUserId(+params.id)
        }

    }, []); 

        
    return <><h3>Välkommen!</h3>
    <div>
      
    </div>
    
    </>
    
}