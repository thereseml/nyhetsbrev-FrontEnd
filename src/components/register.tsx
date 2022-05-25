export function Register () {

    function registerUser() {

    }

    return <>
        <h3>Registrera dig här!</h3>
        <form onSubmit={registerUser}>
            <div>
                <input type="text" name="firstName" placeholder="Förnamn"/>
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Efternamn"/>
            </div>
            <div>
                <input type="email" name="email" placeholder="E-post"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Lösenord"/>
            </div>
            <div>
                <label>
                <input type="checkbox"/>
                Prenumerera på vårt nyhetsbrev? 
                </label>
            </div>
            <button type="submit">Registera</button>
        </form>
    </>
}