import { useState } from 'react'
import './home.css'
import { bookList, moveToCart, deleteItem, subOne, addOne, findBook } from './hom.js'

function Home({swichToOrderPage, swichToSingUpPage, swichToLogInPage}){  
  const [newbookList, setBookList] = useState([])
  const [userInput, setUserInput] = useState("")
  const [CartBooks, setCartBook] = useState([])
  const [pp, setp]=useState(false)
  function rerender(){
    setBookList([...bookList]);
  }
  const toggleDescription = (index) => {
    setp((e) => ({
        [index]: !e[index]
    }));
};
  const addToCart = (index) => {
  const updatedCart = moveToCart(index);
  subOne(index)
  setCartBook([...updatedCart])
  }
  const deletFromCart = (index)=>{
    const updatedCart = deleteItem(index);
    setCartBook([...updatedCart])
  }
  return(
    <div id="HomeBackR">
      <div id="topbuttons">
      <button onClick={swichToOrderPage} style={{ backgroundColor:'#000000', color:'#ffffff', cursor:'pointer'}}>Order page</button>
      <button onClick={swichToSingUpPage} style={{ backgroundColor:'#00ff00', color:'#ffffff', cursor:'pointer'}}>Sing up</button>
      <button onClick={swichToLogInPage} style={{backgroundColor:'#0000ff', color:'#ffffff', cursor:'pointer'}}>Log in</button>
      </div>
      <div id="searchBar">
      <input type='text' style={{width:'50vw'}} onChange={(e) =>setUserInput(e.target.value)}/><button onClick={()=>(findBook(userInput)) (rerender()) } className="fa fa-search"></button>
      </div>
    <div>
      <h1 style={{width:'30vw'}}>Books:</h1>
      <div id="bookList">
                    {bookList.map((item, index) => (
                         <div key={index}>
                            <div id="bookPriNa">
                            <h2 style={{color:'#00ff00', fontSize:'calc(1.5vw + 1.5vh'}}>{item.name}</h2>
                            <p style={{fontSize:'calc(1vw + 1vh'}}>the book is free for every poor person how want to study!!</p>
                            <h2 style={{color:'#ff0000', fontSize:'calc(0.75vw + 0.75vh)'}}>0.00$</h2>
                            <h2 style={{fontSize:'calc(0.75vw + 0.75vh)'}}>{item.count}</h2>
                            </div>
                            <button style={{cursor:'pointer'}} onClick={()=>toggleDescription(index)}><img src={item.g} id="bookStyle"/></button>
                            <button style={{cursor:'pointer'}} onClick={()=>(addToCart(index))}>Add to cart</button>
                            <p>{item.message}</p>
                            {pp[index] && <p>{item.p}</p>} {/* Conditionally render description */}

                        </div>
                    ))}
                </div>
      </div>
      <div id="Cart">
                 <button id="buyButton" onClick={swichToOrderPage}>Buy</button>
                 {CartBooks.map((item, index)=>(
                  <div key={index}>
                       <img src={item} id="bookStyle"/>
                       <button style={{cursor:'pointer'}} onClick={()=>(addOne(index)) (deletFromCart(index))}>delet</button>
                  </div>
            ))}
      </div>
    </div>
  )
}

export default Home