import React, { useContext, useState } from "react";
import Items from "./Items";
import Navbar from "./navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import Checkout from "./Checkout";

const ContextCart = () => {
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const handleCheckout = () => {
    if (totalAmount > 0) {
      setIsCheckoutVisible(true);
    }
  };

  const handleBackToCart = () => {
    setIsCheckoutVisible(false);
  };

  // Inline CSS styles
  const styles = {
    section: {
      padding: '2rem'
    },
    h1: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    totalItems: {
      fontSize: '1.8rem',
      marginBottom: '5rem'
    },
    totalItemsCount: {
      fontWeight: 'bold',
      color: '#333'
    },
    cartItems: {
      width: '100%',
      height: '62rem',
      background: 'linear-gradient(103.49deg, #ffffff -28.13%, rgba(242, 247, 255, 0.5) 116.84%)',
      boxShadow: 'rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem',
      borderRadius: '2rem',
      margin: 'auto',
      display: 'grid',
      placeItems: 'center'
    },
    cartItemsContainer: {
      width: '90%',
      height: '56rem'
    },
    cardTotal: {
      width: '95%',
      marginTop: '4rem',
      textAlign: 'right'
    },
    cardTotalH3: {
      fontStyle: 'normal',
      fontSize: '2.58rem',
      lineHeight: '3.2rem',
      textTransform: 'capitalize',
      color: '#606166'
    },
    cardTotalSpan: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '2.8rem',
      lineHeight: '3.2rem',
      textTransform: 'capitalize',
      color: '#000000',
      marginLeft: '1rem'
    },
    cardTotalButton: {
      border: 'none',
      fontSize: '1.6rem',
      padding: '1rem 3rem',
      color: '#fff',
      backgroundColor: '#349bf3',
      textTransform: 'uppercase',
      marginTop: '1rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      letterSpacing: '1px'
    },
    emptyCart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  };

  if (isCheckoutVisible) {
    return <Checkout onBack={handleBackToCart} />;
  }

  if (item.length === 0) {
    return (
      <>
        <Navbar />
        <section style={styles.section}>
          <h1 style={styles.h1}>Shopping Cart</h1>
          <p style={styles.totalItems}>
            You have <span style={styles.totalItemsCount}>{totalItems}</span> items in your shopping cart
          </p>
          <div style={styles.cartItems}>
            <div style={styles.cartItemsContainer}>
              <Scrollbars>
                <div style={styles.emptyCart}>
                  <h1>Empty Cart</h1>
                </div>
              </Scrollbars>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section style={styles.section}>
        <h1 style={styles.h1}>Shopping Cart</h1>
        <p style={styles.totalItems}>
          You have <span style={styles.totalItemsCount}>{totalItems}</span> items in your shopping cart
        </p>
        <div style={styles.cartItems}>
          <div style={styles.cartItemsContainer}>
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div style={styles.cardTotal}>
          <h3 style={styles.cardTotalH3}>
            Cart Total: <span style={styles.cardTotalSpan}>{totalAmount}₹</span>
          </h3>
          <button onClick={handleCheckout} style={styles.cardTotalButton}>Check Out</button>
          <button onClick={clearCart} style={styles.cardTotalButton}>Clear Cart</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
