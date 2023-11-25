import React from "react";
import "../styles/UserAccount.css"; // Import the CSS file for styling

const UserAccount = () => {
  // Sample data for purchased items (replace this with actual data)

  const purchasedItems = [
    {
      id: 1,
      name: "Aatas Cat Tantalizing Tuna & Salmon in Aspic Cat Wet Food 80g",
      amount: 1.17,
      quantity: 2,
      total: 2.34,
      image: "/Cat_wet_food.png", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Furry Wonder Skin & Coat Vitalize Freeze-dried Raw Recipe For Dogs",
      amount: 54.0,
      quantity: 1,
      total: 54.0,
      image: "/Dog_dry_food_1.png", // Replace with the actual image path
    },
    {
      id: 3,
      name: "Cattyman Stylish Cat Collar Blue Geo Flowers",
      amount: 10.9,
      quantity: 1,
      total: 10.9,
      image: "/Cattyman_Stylish_Cat_Collar_Blue_Geo_Flowers.png", // Replace with the actual image path
    },
  ];

  return (
    <div>
      <div className="my-purchases-heading">My Purchases</div>
      <div className="total-amount">Total amt is: $67.24</div>
      <div className="total-amount">Estimated delivery duration is 3 to 5 days.</div>

      <div className="purchase-box-container">
        {purchasedItems.map((item) => (
          <div key={item.id} className="purchase-box">
            <img src={item.image} alt={item.name} className="purchase-image" />
            <div className="purchase-details">
              <p>{item.name}</p>
              <p>Amount: ${item.amount.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default UserAccount;
