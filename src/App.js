import AddItemList from "./components/AddItemList";
import FilterList from "./components/FilterList";
import FruitList from "./components/FruitList";
import ProductList from "./components/ProductList";
import RemoveItemList from "./components/RemoveItemList";
import SortList from "./components/SortList";
import UpdateItemList from "./components/UpdateItemList";
import UserList from "./components/UserList";


function App() {
  return (
    <>
    <FruitList />
    <UserList />
    <ProductList />
    <FilterList />
    <RemoveItemList />
    <SortList />
    <AddItemList />
    <UpdateItemList />
    </>
  );
}

export default App;
