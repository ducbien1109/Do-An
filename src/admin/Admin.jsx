import React, { useEffect, useState } from "react";
import { Form, Input, Card, Space, DatePicker, Button, Spin } from "antd";
import BtnComponent from "../features/spotify/components/button/BtnComponent";
import getList from "../features/spotify/Api/list";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router";
import TableProduct from "../features/spotify/pages/TableProduct";

const Admin = () => {
  const navigate = useNavigate();
  var isLogins = localStorage.getItem("isLogin");
  if (!isLogins) {
    navigate("/register");
  }
  const [form] = Form.useForm();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const clear = () => {
    form.resetFields();
  };
  const [isLoading, setIsLoading] = useState(false);
  const onsubmit = (value) => {
    if (id) {
      update(value);
    } else {
      create(value);
    }
  };
  useEffect(() => {
    if (id) {
      getMusicDetail(id);
    }
  }, [id]);
  const getMusicDetail = async () => {
    try {
      const { data } = await getList.getDetail(id);
      form.setFieldsValue(data);
    } catch (error) {
      toast.error("Add failed");
    }
  };
  const create = async (value) => {
    try {
      setIsLoading(true);
      await getList.create(value);
      toast.success("Add product success!");
      clear();
    } catch (error) {
      toast.error("Add failed");
    } finally {
      setIsLoading(false);
    }
  };
  const reloadData = async () => {
    const response = await getList.getAll();
    setData(response.data);
  };
  useEffect(() => {
    reloadData();
  }, []);
  const update = async (value) => {
    try {
      setIsLoading(true);
      const setUpdate = await getList.update(value, id);
      toast.success("cập nhật product success!");
      clear();
      navigate("/content");
    } catch (error) {
      toast.error("cập nhật failed");
    } finally {
      setIsLoading(false);
    }
  };
  const handlePageHome = () => {
    navigate("");
  };
  const handleAdd = () => {
    navigate("/home");
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={onsubmit}>
        {isLoading && <Loading />}
        <Card
          title={id ? "update music" : "Add product"}
          bordered={false}
          style={{ width: 600 }}
        >
          <Form.Item
            name="name"
            label="Tên bài hát"
            rules={[{ required: true, message: "Vui lòng nhập lại" }]}
          >
            <Input placeholder="Tên bài hát" />
          </Form.Item>
          <Form.Item
            name="author"
            label="Tên Ca sĩ"
            rules={[{ required: true, message: "Vui lòng nhập lại" }]}
          >
            <Input placeholder="Tên Ca sĩ" />
          </Form.Item>
          <Form.Item
            name="audio"
            label=" bài hát"
            rules={[{ required: true, message: "Vui lòng nhập lại" }]}
          >
            <Input placeholder="Nội dung" />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image ca sĩ"
            rules={[{ required: true, message: "Vui lòng nhập lại" }]}
          >
            <Input placeholder="Image" />
          </Form.Item>
          <Form.Item
            name="detail"
            label="Nội dung bài hát"
            rules={[{ required: true, message: "Vui lòng nhập lại" }]}
          >
            <Input placeholder="Nội dung" />
          </Form.Item>
          {/* <Form.Item
            name="date"
            label="Ngày xuất bản"
          > */}
          {/* <Space direction="vertical" size={12}>
              <DatePicker renderExtraFooter={() => "extra footer"} />
            </Space>
          </Form.Item> */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handlePageHome}
              style={{
                color: "red",
              }}
            >
              Submit
            </Button>
          </Form.Item>

          <BtnComponent name="Thêm mới" handleClick={handleAdd} />
        </Card>
      </Form>
      <TableProduct />
    </div>
  );
};

export default Admin;
