import React from "react";
import "../css/payment.css";
import UPI from "../assets/upi.jpg";

const Payment = () => {
  return (
    <div className="payment-section">
      <div className="payment-section-right swipe">
        <h2>Bank Account Deatils</h2>

        <div className="bank-details">
          <p className="payment-note">
            <span>IMPORTANT NOTICE:</span> Payments should only be made using
            the official account number and scanner provided above. We do not
            accept cash deposits or physical payments in any form. The company
            is not responsible for any payments made to other accounts, other
            scanners, or any cash given to individuals. Please ensure all
            payments are directed through the official account and scanner only.
          </p>
          <div className="bank-details-left">
            <h3>HDFC Bank Account Details</h3>

            <ul>
              <li>
                <span>Account Holder Name:</span>
                ODISHA HOLIDAYS PVT LTD
              </li>
              <li>
                <span>Bank Details:</span>
                HDFC ( Dwarka Sec-5 New Delhi )
              </li>
              <li>
                <span>Account No. :</span>
                50200022769536
              </li>
              <li>
                <span>IFSC Code:</span>
                HDFC0000249
              </li>
              <li>
                <span>Branch Address:</span>
                Aggarwal Central Plaza, Plot No. 11, Sector-5, Dwarka, New Delhi-110075
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="payment-section-left swipe">
        <img src={UPI} alt="" />
      </div>
    </div>
  );
};

export default Payment;
