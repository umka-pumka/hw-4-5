import { BookList, } from "../../Components"


const MainPage = () => {
  return (
    <div>
<h5 style={{color:"grey",textAlign:'center'}}>Candles & DIFUSERS</h5>
<h1 style={{color:"black",textAlign:'center'}}>WEEKLY BEST SELLERS</h1>

      <BookList />
      {/* <hr /> */}

      {/* <Cart /> */}
    </div>
  )
}

export default MainPage