import BottomNav from "./components/BottomNav";
import IndexPage from "./pages/IndexPage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import OrderListPage from "./pages/OrderListPage";
import React, { useState } from "react";

function App() {
  const [activeNum, setActiveNum] = useState(0);
  return (
    <div className="App">
      {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
