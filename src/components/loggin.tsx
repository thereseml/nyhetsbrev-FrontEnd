export function Loggin () {

    function logginUser() {
        
    }

    return <>
        <h3>Logga in här!</h3>
        <form onSubmit={logginUser}>
            <div>
                <input type="email" name="email" placeholder="E-post"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Lösenord"/>
            </div>
            <button type="submit">Logga in</button>
        </form>
    </>
}