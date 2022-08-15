
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetails';
function App() {
  return (
    <div className="App">
     
     <Header />
  
   {/* <Header />
   
   <Route path="/" element={ProductListing} />
   <Route path="/product/:productId" element={ProductDetail} />
   <Route>404 Not Found</Route> */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing />}>
         
          

          <Route path="/" exact component={ProductListing} />
        
         
        </Route>
        
        <Route path="/product/:productId" component={ProductDetail} />
      </Routes>
    </BrowserRouter>
  
   

   
     {/* <Header />
     
     <ProductListing />
     <ProductDetail /> */}
      {/* <BrowserRouter>
    <Routes>

   
      
      <Route path="/" element={ProductListing} />
      <Route path="/product/:productId" element={ProductDetail} />
     
   
  </Routes>
</BrowserRouter> */}
   
    </div>
  );
}

export default App;
