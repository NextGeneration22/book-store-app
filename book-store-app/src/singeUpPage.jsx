import'./singUpPage.css'
function SingUp(){
return(
    <div id="sinUp">
        <form>
        <h3>Email Adress:</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="password"/>
        <h3>Submit Password:</h3>
        <input type="password"/><b/>
        <button type="submit" style={{backgroundColor:'#0000ff', color:'#ffffff', cursor:'pointer'}}>sing up</button>
        </form>
    </div>
)
};
export default SingUp