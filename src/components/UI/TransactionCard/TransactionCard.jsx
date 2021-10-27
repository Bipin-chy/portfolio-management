import { Col, Row, Form, InputNumber, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import "./TransactionCard.css";
import { useData } from "./../../../contexts/datacontext";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/authcontexts";

const TransactionCard = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const randomNumber = Math.floor(Math.random() * 2050 + 1000);

  const { stocks, StockDetails, stockBuy, TransactionBuy } = useData();
  const { currentUser } = useAuth();
  const [price_per_unit, setAmount] = useState();
  const [quantity, setQuantity] = useState();
  const [stock, setStock] = useState();
  const [ratetype, setRateType] = useState();

  const date = new Date().toLocaleDateString();

  //   userID
  const userid = currentUser.claims.user_id;

  useEffect(() => {
    StockDetails();
    TransactionBuy();
  }, []);

  //   on change stock name

  function handleStock(value) {
    const selectedStock = stocks.filter(
      ({ stock_name }) => stock_name === value
    );
    setAmount(selectedStock);
  }

  console.log(price_per_unit);

  // on change transaction type
  function handleTransaction(value) {
    if (value === "Sell") {
      setStock(stockBuy);
      setRateType("Sell");
    } else {
      setStock(stocks);
    }
  }

  console.log("stock", stock);

  //   handle quantity

  const handleQuantity = (value) => {
    setQuantity(value);
  };

  console.log(quantity);

  // Search stock names
  function onSearch(val) {
    console.log("search:", val);
  }

  const onFinish = async (values) => {
    // console.log(values);
    const stockDetails = {
      stock_name: values.stock_name,
      quantity: values.quantity,
      amount: ratetype
        ? quantity * price_per_unit[0].amount + randomNumber
        : quantity * price_per_unit[0].amount,
      transaction_type: values.transaction_type,
      current_amount: values.quantity * price_per_unit[0].amount + randomNumber,
      transaction_date: date,
      userid: userid,
    };

    await db
      .collection("Transaction")
      .doc()
      .set(stockDetails)
      .then(() => {
        message.success("your transaction is done successfully");
        form.resetFields();
      })
      .catch((err) => message.error(err));

    console.log(stockDetails);
  };

  return (
    <>
      <div className="transaction_card_container">
        <p>portfolio management</p>
        <h1>Order Management</h1>
        <div className="transaction_card_content">
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12}>
                {/* <div className="dashboard_form"> */}

                <label htmlFor="transaction_type">Transaction type</label>
                <Form.Item
                  name="transaction_type"
                  rules={[
                    {
                      required: true,
                      message: "Please input transaction type!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select a transaction type"
                    optionFilterProp="children"
                    onChange={handleTransaction}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Buy">Buy</Option>
                    <Option value="Sell">Sell</Option>
                  </Select>
                </Form.Item>
                <label htmlFor="stock_name">Stock Name</label>
                <Form.Item
                  name="stock_name"
                  rules={[
                    { required: true, message: "Please input Stock Name!" },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select a Stock name"
                    optionFilterProp="children"
                    onChange={handleStock}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {stock
                      ? stock.map(({ stock_name }) => (
                          <Option value={stock_name}>{stock_name}</Option>
                        ))
                      : stocks.map((stock) => (
                          <Option value={stock.StockName}>
                            {stock.StockName}
                          </Option>
                        ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                {/* <div className="dashboard_form"> */}

                <label htmlFor="quantity">Quantity</label>
                <Form.Item
                  name="quantity"
                  rules={[
                    {
                      required: true,
                      message: "Please input quantity!",
                    },
                  ]}
                >
                  <InputNumber
                    min={10}
                    style={{ width: "100%" }}
                    onChange={handleQuantity}
                  />
                </Form.Item>
                <label htmlFor="amount">Amount</label>
                <Form.Item name="amount">
                  <InputNumber
                    style={{ width: "100%" }}
                    value={
                      price_per_unit
                        ? ratetype
                          ? quantity * price_per_unit[0].amount + randomNumber
                          : quantity * price_per_unit[0].amount
                        : 0
                    }
                    disabled
                  />
                  <span style={{ display: "none" }}>
                    {price_per_unit
                      ? ratetype
                        ? quantity * price_per_unit[0].amount + randomNumber
                        : quantity * price_per_unit[0].amount
                      : 0}
                  </span>
                </Form.Item>

                {/* </div> */}
              </Col>

              <Form.Item style={{ marginLeft: "8px" }}>
                <button type="submit" className=" btn bg-dark">
                  SUBMIT
                </button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
