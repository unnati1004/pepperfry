import React from "react";
import "../payment/Payment.css";

export const Payment = () => {
  return (
    <>
      <div id="left">
        <div className="container">
          <div className="box">
            <div>
              <p className="bold">ORDER SUMMARY</p>
            </div>
            <div>
              <p>(1 items) +</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div className="start">
              <p className="bold">SHIPPING DETAILS</p>
              <p>SORAV MALVIYA </p>
              <p>D-2 Mohan Garden</p>
              <p>Delhi - 110059</p>
              <p>NEW DELHI</p>
              <p>M: 8920494388</p>
            </div>
            <div className="start">
              <p className="bold">BILLING DETAILS</p>
              <p>SORAV MALVIYA</p>
              <p>D-2 Mohan Garden</p>
              <p>Delhi - 110059</p>
              <p>NEW DELHI</p>
              <p>M: 8920494388</p>
            </div>
            <div>
              <p className="add">+</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <div>
              <p className="bold">PAYMENT</p>
            </div>
            <div>
              <p>HOW WOULD YOU LIKE TO PAY ---</p>
            </div>
          </div>
        </div>
        <div id="payment" className="container">
          <div className="box">
            <div>
              <p>SELECT PAYMENT METHOD</p>
            </div>
          </div>
        </div>
        <div id="select" className="container">
          <div id="border" className="box">
            <div id="options">
              <p>ATM/DEBIT CARD</p>
              <p>CARDLESS EMI / PAYLATER</p>
              <p>CREDIT CARD</p>
              <p>EMI</p>
              <p>INTERNET BANKING</p>
              <p>GOOGLE PAY / UPI</p>
              <p>WALLET</p>
              <p>CASH ON DELIVERY</p>
              <br />
            </div>
            <div>
              <p id="choose">CHOOSE YOUR DEBIT CARD TYPE</p>
              <p>
                <input type="checkbox" class="input" />
                MASTERCARD
              </p>
              <p>
                <input type="checkbox" class="input" />
                RuPay
              </p>
              <p>
                <input type="checkbox" class="input" />
                MAESTRO
              </p>
              <p>
                <input type="checkbox" class="input" />
                VISA
              </p>
              <p>
                <button id="btn">PROCEED TO PAY</button>
              </p>
              <p id="note">
                Note: You Will Be Asked To Enter Your Card Details On
                Proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="right">
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p>Cart Value</p>
            </div>
            <div>
              <p>₹ 14000</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p className="green bold">Retail Discount</p>
            </div>
            <div>
              <p className="green">(-) ₹ 2000</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div className="orange">
              <p>Delivery (FREE)</p>
            </div>
            <div>
              <p>₹ 0</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p>GiveIndia</p>
            </div>
            <div>
              <p>₹ 99</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p className="bold">Total</p>
            </div>
            <div>
              <p className="bold">₹ 12100</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p></p>
            </div>
            <div>
              <p>(inclusive of all taxes)</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p className="bold">No Cost EMI Available.....</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p>
                <input type="checkbox" class="input" />
                Contribute Rs. 99 For COVID Relief Through GiveIndia.
              </p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div id="stylish">
              <p className="bold">BANKOFFERS</p>
            </div>
          </div>
        </div>
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p className="bold">100% SAFE & SECURE</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="rcontainer">
          <div className="rbox">
            <div>
              <p>Easy Returns</p>
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
};
