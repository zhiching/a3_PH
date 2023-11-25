import React, { useState, useEffect } from "react";
import "../styles/Shop.css";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MemberShop = () => {
  const linkStyle = {
    color: "blue", // Change the color to your desired color
    textDecoration: "underline", // Add underline for better visual indication
  };
  // State for navigation
  const navigate = useNavigate();
  // State for search and filter criteria
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFood, setSelectedFood] = useState("All");
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Sample data for the gallery (replace with your actual data)
  const galleryData = [
    {
      id: 1,
      name: "Taste Of The Wild Rocky Mountain Roasted Venison & Smoked Salmon Dry Cat Food",
      category: "Cat",
      food: "Cat Dry Food",
      image: "/Cat_dry_food.png",
      price: 14.31, // Add the price property
      ingredients:
        "Chicken meal, peas, sweet potatoes, chicken fat (preserved with mixed tocopherols), pea protein, potato protein, roasted venison, smoked salmon, natural flavor, ocean fish meal, DL-methionine, potassium chloride, taurine, choline chloride, dried chicory root, tomatoes, blueberries, raspberries, yucca schidigera extract, dried Lactobacillus acidophilus fermentation product, dried Bifidobacterium animalis fermentation product, zinc proteinate, vitamin E supplement, niacin, manganese proteinate, copper proteinate, zinc sulfate, manganese sulfate, copper sulfate, thiamine mononitrate (vitamin B1), vitamin A supplement, biotin, potassium iodide, calcium pantothenate, riboflavin (vitaminB2), pyridoxine hydrochloride (vitamin B6), vitamin B12 supplement, manganous oxid",
    },
    {
      id: 2,
      name: "Aatas Cat Tantalizing Tuna & Salmon in Aspic Cat Wet Food 80g",
      category: "Cat",
      food: "Cat Wet Food",
      image: "/Cat_wet_food.png",
      price: 1.17,
      ingredients:
        "Tuna Broth, Tuna, Salmon, Gelling agents (Seaweed, Cassia Gum, Guar Gum, Locust Bean Gum, Potassium Chloride & Carbonates)",
    },
    {
      id: 3,
      name: "Cattyman Stylish Cat Collar - Blue Geo Flowers",
      category: "Cat",
      food: "Cat Accessories",
      image: "/Cattyman_Stylish_Cat_Collar_Blue_Geo_Flowers.png",
      price: 9.81,
      ingredients: "",
    },
    {
      id: 4,
      name: "Furry Wonder Skin & Coat Vitalize Freeze-dried Raw Recipe For Dogs ",
      category: "Dog",
      food: "Dog Dry Food",
      image: "/Dog_dry_food_1.png",
      price: 54.0,
      ingredients:
        "Wild-caught Salmon, Wild-caught Cod, Chicken with Bone, Turkey Liver, Chicken Liver, Chicken Hearts, Chicken Gizzards, Flaxseed, Sweet Potato, Green Beans, Pumpkin Seed Powder, Wild-caught Whole Ground Krill, FOS, Chicory Root, Green Lipped Mussels, Glucosamine, Psyllium, Sea Salt, Choline Chloride, Mixed Tocopherols, Zinc Proteinate, B Vitamins (Niacin, Riboflavin, Thiamine, Vitamin B12, Pyridoxine, and Folic Acid).",
    },
    {
      id: 5,
      name: "Bronco Turkey Pâté Dog Wet Food Tray 100g",
      category: "Dog",
      food: "Dog Wet Food",
      image: "/Dog_wet_food_1.png",
      price: 1.17,
      ingredients:
        "Meat and Animal Derivatives 96% (Turkey 42%), Minerals, Vitamins. *excluding Spring Water. Nutritional Additives: Vitamin D3 140 IU/kg, Zinc: 12 mg/kg (as Zinc Sulphate Monohydrate), Manganese: 1 mg/kg (as Manganese Oxide), Copper: 0.5mg/kg (as Copper(II) Sulphate Pentahydrate), Iodine: 0.3 mg/kg (as Calcium Iodate Anhydrous)",
    },
    {
      id: 6,
      name: "Paw Made Orthopedic Tent Igloo Bed - Dark Green",
      category: "Dog",
      food: "Dog accessories",
      image: "/Paw_Made_Orthopedic_Tent_Igloo_Bed_DarkGreen.png",
      price: 18.0,
      ingredients: "",
    },
  ];
  // Filter gallery items based on search and filter criteria
  const filteredGalleryData = galleryData.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const categoryMatches =
      selectedCategory === "All" || item.category === selectedCategory;
    const foodMatches = selectedFood === "All" || item.food === selectedFood;

    return nameMatches && categoryMatches && foodMatches;
  });

  // State to track the selected item for the detailed view
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to set the selected item and show the modal
  const showItemDetails = (item) => {
    setSelectedItem(item);
    setShowDetailsModal(true);
  };

  // State to control the visibility of the details modal
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Function to toggle the details modal
  const toggleDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };
  // State for the modal indicating whether an item has been added to the cart
  const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);

  // Function to toggle the added to cart modal
  const toggleAddedToCartModal = () => {
    setShowAddedToCartModal(!showAddedToCartModal);
  };

  // Render the gallery items
  const renderGalleryItems = () => {
    return filteredGalleryData.map((item) => (
      <div key={item.id} className="gallery-item">
        <img
          src={item.image}
          alt={item.name}
          onClick={() => showItemDetails(item)}
        />
        <p style={{ color: "black" }}>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
    ));
  };
  // State for the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const newItem = { ...item, id: uuidv4() };
    setCart([...cart, newItem]);
    toggleAddedToCartModal(); // Show the added to cart modal
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  // Calculate the total amount in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  // State to control the visibility of the cart modal
  const [showCartModal, setShowCartModal] = useState(false);

  // Function to toggle the cart modal
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  // Render the cart items
  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.id} className="cart-item">
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    ));
  };
  const toggleCheckoutModal = () => {
    setShowCheckoutModal(!showCheckoutModal);
  };

  const toggleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  // Function to handle closing all modals and clearing the shopping cart
  const handleCloseAllModals = () => {
    setShowCartModal(false);
    setShowDetailsModal(false);
    setShowAddedToCartModal(false);
    setShowCheckoutModal(false);
    setShowConfirmationModal(false);
    setCart([]); // Clear the shopping cart
  };

  // Function to handle confirming the purchase
  const handleConfirmPurchase = () => {
    // Close all modals and clear the cart
    handleCloseAllModals();

    // Directly redirect to UserAccount page
    navigate("/UserAccount");
  };

  // Function to handle successful purchase
  const handleSuccessfulPurchase = () => {
    // Perform any other necessary actions related to successful purchase

    // Clear the shopping cart
    setCart([]);

    // Close the modals
    handleCloseAllModals();
  };

  return (
    <>
      <div className="Shop_background_image">
        <div className="overlay-text">
          <h1 id="Welcome">
            Welcome to the <br></br>Pet Shop
          </h1>
          <p>
            Your generous contributions will <br></br>significantly influence
            our ability<br></br> to sustain operations, ensuring the<br></br>{" "}
            provision of shelter, nourishment,<br></br> medical care, and
            affection to the <br></br>
            animals we rescue daily.
          </p>
        </div>
      </div>
      <div>
        <br></br>
        <h1 id="Thankyou">
          Thank you for joining us. Every items will have 10% discount.
        </h1>
      </div>
      <br></br>
      <div className="search-container">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Categories Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>

        {/* Pet items Dropdown */}
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value="All">All Pet items</option>
          <option value="Cat Dry Food">Cat Dry Food</option>
          <option value="Cat Wet Food">Cat Wet Food</option>
          <option value="Cat Accessories">Cat Accessories</option>

          <option value="Dog Dry Food">Dog Dry Food</option>
          <option value="Dog Wet Food">Dog Wet Food</option>
          <option value="Dog Accessories">Dog Accessories</option>
        </select>
        {/* Shopping Cart */}
        {/* Clickable Cart Button */}
        <button onClick={toggleCartModal}>View Cart</button>
      </div>

      {/* Gallery Display */}
      <div className="gallery">{renderGalleryItems()}</div>

      {/* Shopping Cart Modal */}
      <Modal show={showCartModal} onHide={toggleCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {renderCartItems()}
              <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
              <button onClick={toggleCheckoutModal}>Checkout</button>
              <button onClick={() => setCart([])}>Clear Cart</button>
            </>
          )}
        </Modal.Body>
      </Modal>
      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={toggleDetailsModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <>
              <img src={selectedItem.image} alt={selectedItem.name} />
              <p>{selectedItem.name}</p>
              <p>{selectedItem.price}</p>
              <br></br>
              <p>Ingredients: {selectedItem.ingredients}</p>
              <br></br>
              <button onClick={() => addToCart(selectedItem)}>
                Add to Cart
              </button>
            </>
          )}
        </Modal.Body>
      </Modal>
      {/* Added to Cart Modal */}
      <Modal show={showAddedToCartModal} onHide={toggleAddedToCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Item Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The selected item has been added to your cart.</p>
        </Modal.Body>
      </Modal>
      <Modal show={showCheckoutModal} onHide={toggleCheckoutModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to proceed with the checkout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleCheckoutModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmPurchase}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showConfirmationModal} onHide={handleCloseAllModals}>
        <Modal.Header closeButton>
          <Modal.Title>Items Purchased</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your items have been purchased. Estimated delivery date is 5 days
            from now.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSuccessfulPurchase}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemberShop;
