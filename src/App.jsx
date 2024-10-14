import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ItemListContainer from "./components/ItemListContainer"; 
import Layout from "./components/Layout"; 
import ItemDetailContainer from "./components/ItemdetailContainer"; 
import NotFound from "./components/NotFound"; 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} /> {/* Asegúrate de que esta ruta esté aquí */}
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para manejar 404 Not Found */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
