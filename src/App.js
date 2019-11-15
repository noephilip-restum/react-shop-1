import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      shirts: [
        {
          id: 1,
          imageUrl: "https://via.placeholder.com/150x150",
          title: "fancy hat",
          price: 12.99,
          description: "has a feather in it."
        }
      ],
      pants: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      address: "",
      creditCard: ""
    };
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item]
    });
  }

  checkout = () => {
    if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
      this.setState({ cart: [] });
      alert("Purchase is complete!");
    } else {
      alert("Please fill out the required fields.");
    }
  };

  handleAddressInput(e) {
    this.setState({ address: e });
  }

  handleCreditCardInput(e) {
    this.setState({ creditCard: e });
  }

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} alt="siobeaintsad" />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} alt="siobeaintsad" />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: ${" "}
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <div>
            <input
              placeholder="address"
              value={this.state.address}
              onChange={e => this.handleAddressInput(e.target.value)}
            />
            <input
              placeholder="credit card number"
              value={this.state.creditCard}
              onChange={e => this.handleCreditCardInput(e.target.value)}
            />
          </div>
          <button onClick={() => this.checkout()}>Checkout</button>
          {this.state.cart.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} alt="siobeaintsad" />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
