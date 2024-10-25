
    export let bookList=[
        {g:'images/book JavaScript.png',
         count:40,
         message:"",
         name:"JavaScript All In One For Dummies",
         p:"dicripion",
        },
        {g:'images/book cant hurt .png',
          count:15, message:"",
          name:"Can\'t Hurt Me",
          p:'discription',
          },
        {g:'images/book defren.png',count:25,
           message:"",
           name:"Differential Equation Workbook",
           p:"discripion",          
          },
        {g:'images/book emotional.png',
          count:30,
          message:"", 
          name:"Emotional Intelligence",
          p:"discripion"
        },
        {g:'images/book Hummen N.png',
         count:5,
         message:"",
         name:"The Law Of Human Nature",
         p:"discripion"
        },
        {g:'images/book Mastery.png',
         count:20,
         message:"",
         name:"The Maistry",
         p:"discription",
          }
    ]
    let cartItems=[]
    export function moveToCart(index){
        if(bookList[index].count>0){
           cartItems.push(bookList[index].g)
           return cartItems;
        }
    };


    export function deleteItem(index){
      delete cartItems[index]
      cartItems = cartItems.filter((item)=> item !== undefined)

      return cartItems;
    }
    export function subOne(index){
      if(bookList[index].count>0)
       bookList[index].count--
        if(bookList[index].count==0){
          bookList[index].message="The stock is empty come back later!"
      }else{bookList[index].message=""}
    }

    export function addOne(index){
      let a =bookList.find((ob)=> ob['g'] === cartItems[index]);
      let b = bookList.indexOf(a);
      bookList[b].count++;
      if(bookList[b].count>0){
        {bookList[b].message=""}
      }
    }

    export function findBook(d){
        let f = d.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      let c = bookList.find((ob)=> ob['name']===f);
      if(c!== undefined){
       let E = bookList.indexOf(c)
       delete bookList[E]
       bookList = bookList.filter((item)=> item !== undefined)
       bookList.unshift(c);
       console.log(bookList)
       return bookList;
      }else{
        alert("please cheak your spelling")
      }
    }
    export default cartItems;