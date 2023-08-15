import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./components/ShopPage/ShopPage";
import Footer from "./components/Footer/Footer";
import { useParams } from "react-router-dom";

function App() {
  const { shop } = useParams();
  console.log(shop);
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState(() => {
    return JSON.parse(localStorage.getItem("addedItems")) || [];
  });
  const [filter, setFilter] = useState("");
  const displayProducts = !filter
    ? products
    : products.filter((product) => {
        return product.category === filter;
      });
  console.log(products, addedItems);

  useEffect(() => {
    localStorage.setItem("addedItems", JSON.stringify(addedItems));
  }, [addedItems]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  function handleAddItem(item) {
    console.log("clicked");
    let containsItem = false;
    for (let i = 0; i < addedItems.length; i++) {
      if (addedItems[i].id === item.id) {
        containsItem = true;
        break;
      }
    }
    console.log(containsItem);
    if (containsItem) {
      setAddedItems(
        addedItems.map((itm) => {
          if (itm.id === item.id && itm.qty < 9) {
            return { ...itm, qty: parseInt(itm.qty) + 1 };
          }
          return itm;
        })
      );
    } else {
      setAddedItems([...addedItems, { ...item, qty: 1 }]);
    }
  }

  function handleChangeFilter(event) {
    const { value } = event.target;
    console.log(value);
    setFilter(value);
  }

  function handleQtyChange(event, id, del) {
    console.log(del);
    if (del) {
      console.log("here");
      setAddedItems(
        addedItems.filter((item) => {
          if (item.id !== id) return item;
        })
      );
      return;
    }
    const { value } = event.target;
    console.log(value, id);
    if (value === "0") {
      setAddedItems(
        addedItems.filter((item) => {
          if (item.id !== id) return item;
        })
      );
      return;
    }
    setAddedItems(
      addedItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: value };
        }
        return item;
      })
    );
  }
  function handleClearBasket() {
    setAddedItems([]);
  }
  return (
    <div className="app">
      <Navbar
        title={shop ? "Shopping Page" : "Home Page"}
        parent="Navbar"
        addedItems={addedItems}
      />
      {shop ? (
        <ShopPage
          handleChangeFilter={handleChangeFilter}
          handleAddItem={handleAddItem}
          handleQtyChange={handleQtyChange}
          displayProducts={displayProducts}
          addedItems={addedItems}
          handleClearBasket={handleClearBasket}
        />
      ) : (
        <>
          <img src="./src/assets/fake_amazon.jpg" alt="fake amazon image" />

          <Footer />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
