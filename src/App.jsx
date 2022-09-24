import { Routes, Route } from "react-router-dom";

import MainView from "./pages/mainView/MainView";
import MainLayout from "./layout/MainLayout";
import CreateView from "./pages/createView/CreateView";
import EditView from "./pages/editView/EditView";
import CardView from "./pages/cardView/CardView";

import style from "./App.module.css";

function App() {
  return (
      <div className={style.globalFont}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainView />} />
            <Route path="create-view" element={<CreateView />} />
            <Route path="edit-view/:productId" element={<EditView />} />
            <Route path="card-view" element={<CardView />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
