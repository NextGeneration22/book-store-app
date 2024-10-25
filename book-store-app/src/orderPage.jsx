import cartItems from "./hom"
import './orderPage.css'
function OrderPage({swichToHomePage}){
    return(
        <>
          <div>
            <button style={{cursor:'pointer'}} onClick={swichToHomePage}>Home</button>
          </div>
          <div id="bookToBuy">
             {cartItems.map((item, index)=>
              <img key ={index} src={item}/>
             )
            }
          </div>
          <div id="paymentInfo">
            <h3>VISA:</h3>
            <form>
              <label>Card Number:<input 
              type="text" name="digits" 
              pattern="\d{12}" 
              minlength="12" 
              maxlength="12" 
              required 
              title="Please enter exactly 12 digits."
              /></label>
              <label>Expiry Date:<input type="date" /></label>
              <label>CVV:<input type="text" 
              name="digits"  pattern="\d{3}"
              minlength="3" 
              maxlength="3"  
              required 
              title="Please enter exactly 3 digits."
              /></label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
    )
}
export default OrderPage;