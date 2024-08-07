// Checkout.js
import React, { useContext } from "react";
import { CartContext } from "./Cart";
import Items from "./Items";

const Checkout = ({ onBack }) => {
  const { item, totalAmount } = useContext(CartContext);

  // Inline CSS styles
  const styles = {
    section: {
      padding: '2rem'
    },
    backButton: {
      fontSize: '1.6rem',
      padding: '0.5rem 1rem',
      border: 'none',
      backgroundColor: '#349bf3',
      color: '#fff',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      marginBottom: '2rem'
    },
    h1: {
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    totalItems: {
      fontSize: '1.8rem',
      marginBottom: '2rem'
    },
    cartItems: {
      background: '#f1f1f1',
      padding: '1rem',
      borderRadius: '0.5rem'
    },
    cartItemsContainer: {
      maxHeight: '50rem',
      overflowY: 'auto'
    },
    h3: {
      fontSize: '2rem',
      marginTop: '2rem'
    }
  };

  return (
    <section style={styles.section}>
      <button onClick={onBack} style={styles.backButton}>Back to Cart</button>
      <h1 style={styles.h1}>Checkout</h1>
      <p style={styles.totalItems}>
        You have <span className="total-items-count">{item.length}</span> items in your checkout
      </p>
      <div style={styles.cartItems}>
        <div style={styles.cartItemsContainer}>
          {item.map((curItem) => (
            <Items key={curItem.id} {...curItem} />
          ))}
        </div>
      </div>
      <h3 style={styles.h3}>
        Cart Total: <span>{totalAmount}₹</span>
      </h3>
    </section>
  );
};

export default Checkout;
