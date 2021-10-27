import { Col, Row, Form, Input, message, InputNumber } from "antd";
import React from "react";
import "./DashboardCard.css";
import dashboard from "./../../../assets/dashboard.png";
import { db } from "./../../../firebase";

const DashboardCard = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    const StockName = values.stock_name;
    const Amount = values.price_per_unit;

    const Stock_Description = {
      stock_name: StockName,
      amount: Amount,
    };

    db.collection("StockDescription")
      .doc()
      .set(Stock_Description)
      .then(() => {
        message.success("Stock added successfully");
        form.resetFields();
      })
      .catch((err) => message.error(err));
  };
  return (
    <>
      <div className="dashboard_card_container">
        <div className="dashboard_card_content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="dashboard_form">
                <span>portfolio management</span>
                <h1>Dashboard</h1>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                >
                  <label htmlFor="stock_name">Stock Name</label>
                  <Form.Item
                    name="stock_name"
                    rules={[
                      { required: true, message: "Please input Stock Name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <label htmlFor="price_per_unit">Price Per Unit</label>
                  <Form.Item
                    name="price_per_unit"
                    rules={[
                      {
                        required: true,
                        message: "Please input Amount of Stock!",
                      },
                    ]}
                  >
                    <InputNumber min={10} style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item>
                    <button type="submit" className=" btn bg-dark">
                      ADD STOCK
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="dashboard_img">
                <img src={dashboard} alt="Dashboard" width="100%" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
