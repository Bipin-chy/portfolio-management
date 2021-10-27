import React from "react";
import "./Transaction.css";
import { TransactionCard } from "../../components/UI/TransactionCard";
import NavBar from "../../components/Layout/NavBar/NavBar";
import Footer from "./../../components/Layout/Footer/Footer";

const Transaction = () => {
  return (
    <>
      <NavBar />
      <div className="transaction_container">
        <div className="wrapper">
          <TransactionCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transaction;
