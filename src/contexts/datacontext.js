import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { db } from "../firebase";
import { useAuth } from "./authcontexts";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [stocks, setStocks] = useState([]);
  const [transaction, settransaction] = useState([]);
  const [stockBuy, setstockBuy] = useState([]);
  const [stockSell, setstockSell] = useState([]);

  const StockDetails = () => {
    db.collection("StockDescription")
      .get()
      .then((querySnapshot) => {
        const item = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          item.push(data);
        });
        setStocks(item);
      })
      .catch((err) => console.log(err));
  };

  const Transaction = () => {
    db.collection("Transaction")
      .get()
      .then((querySnapshot) => {
        const item = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId === currentUser.claims.user_id) {
            item.push(data);
          } else {
            return;
          }
        });
        settransaction(item);
      })
      .catch((err) => console.log(err));
  };

  const TransactionBuy = () => {
    db.collection("Transaction")
      .get()
      .then((querySnapshot) => {
        const itemBuy = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (
            data.userId === currentUser.claims.user_id &&
            data.transaction_type === "Buy"
          ) {
            itemBuy.push(data);
          } else {
            return;
          }
        });

        setstockBuy(itemBuy);
      })
      .catch((err) => console.log(err));
  };

  const TransactionSell = () => {
    db.collection("Transaction")
      .get()
      .then((querySnapshot) => {
        const itemSell = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (
            data.userId === currentUser.claims.user_id &&
            data.transaction_type === "Sell"
          ) {
            itemSell.push(data);
          } else {
            return;
          }
        });

        setstockSell(itemSell);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   Transaction();
  //   TransactionBuy();
  //   TransactionSell();
  // }, []);

  // console.log("Transaction are", transaction);
  // console.log("sell", stockSell);
  // console.log("buy", stockBuy);

  const values = {
    stocks,
    StockDetails,
    Transaction,
    transaction,
    TransactionBuy,
    stockBuy,
    TransactionSell,
    stockSell,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
