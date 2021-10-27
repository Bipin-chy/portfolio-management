import React, { useEffect } from "react";
import { Col, Row, Table } from "antd";
import "./PortfolioCard.css";
import { useData } from "./../../../contexts/datacontext";

const PortfolioCard = () => {
  const {
    transaction,
    stockBuy,
    stockSell,
    Transaction,
    TransactionBuy,
    TransactionSell,
  } = useData();

  console.log("transaction are", transaction);
  console.log("sell", stockSell);
  console.log("buy", stockBuy);

  // mapping buy stocks
  const investment = stockBuy.map((data) => data.amount);
  const buyUnits = stockBuy.map((data) => data.quantity);

  // mapping sell stock
  const soldAmount = stockSell.map((data) => data.amount);
  const sellUnits = stockSell.map((data) => data.quantity);

  // mapping current amount
  const currentAmount = stockBuy.map((data) => data.current_amount);

  // reducer
  const reducerOfPrice = (accumulator, currentValue) =>
    accumulator + currentValue;

  // calculating total investment amount
  const totalInvestment = investment.reduce(reducerOfPrice, 0);

  // calculating total sold amount
  const totalSoldAmount = soldAmount.reduce(reducerOfPrice, 0);

  // calculating total buy units
  const totalBuyUnits = buyUnits.reduce(reducerOfPrice, 0);

  // calculating total sell units
  const totalSellUnits = sellUnits.reduce(reducerOfPrice, 0);

  // calculating current amount
  const totalCurrentAmount = currentAmount.reduce(reducerOfPrice, 0);

  const columns = [
    {
      title: "Stock Name",
      dataIndex: "stock_name",
      key: "stock_name",
    },
    {
      title: "Transaction Type",
      dataIndex: "transaction_type",
      key: "transaction_type",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },

    {
      title: "Transaction Date",
      dataIndex: "transaction_date",
      key: "transaction_date",
    },
  ];

  useEffect(() => {
    Transaction();
    TransactionBuy();
    TransactionSell();
  }, []);

  return (
    <>
      <div className="portfolio_card_container">
        <p>portfolio management</p>
        <h1>My Portfolio</h1>
        <div className="portfolio_card_content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="summary">
                <div className="summary_card">
                  <p>Total Investment :</p> <p>{totalInvestment}</p>
                </div>
                <div className="summary_card">
                  <p>Total Sold Amount : </p> <p>{totalSoldAmount}</p>
                </div>
                <div className="summary_card">
                  <p>Total Buy Units : </p> <p>{totalBuyUnits}</p>
                </div>
                <div className="summary_card">
                  <p>Total Sold Units : </p> <p>{totalSellUnits}</p>
                </div>
                <div className="summary_card">
                  <p>Current Amount : </p> <p>{totalCurrentAmount}</p>
                </div>

                <div className="summary_card">
                  <p>Overall all profit : </p>
                  <p>{totalSoldAmount - totalInvestment}</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <Table dataSource={transaction} columns={columns} />
            </Col>
          </Row>

          <div className="header" style={{ margin: "50px 0 " }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "800",
              }}
            >
              Individual Stocks
            </p>
          </div>

          <Row gutter={[16, 16]}>
            {stockBuy.map((data) => (
              <Col xs={24} sm={24} md={8} lg={8}>
                <h3 style={{ paddingBottom: "10px" }}>{data.stock_name}</h3>
                <div className="summary">
                  <>
                    <div className="summary_card">
                      <p>Total Investment :</p> <p>{data.amount}</p>
                    </div>
                    <div className="summary_card">
                      <p>Total Buy Units : </p> <p>{data.quantity}</p>
                    </div>
                    {/* <div className="summary_card">
                      <p>Total Sold Units : </p> <p>{totalSellUnits}</p>
                    </div> */}
                    <div className="summary_card">
                      <p>Current Amount : </p> <p>{data.current_amount}</p>
                    </div>

                    <div className="summary_card">
                      <p>Overall all profit : </p>
                      <p>{data.current_amount - data.amount}</p>
                    </div>
                  </>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
