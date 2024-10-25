import './logInPage.css'
function LogIn(){
    return(
       <div id="logInInfo">
        <form>
        <h3>Email Address:</h3>
        <input type="text"/>
        <h3>Password:</h3>
        <input type="password"/>
        <button style={{backgroundColor:'#0000ff', color:'#ffffff', cursor:'pointer'}} type="submit">log in</button>
        </form>
       </div>
    )
}
export default LogIn