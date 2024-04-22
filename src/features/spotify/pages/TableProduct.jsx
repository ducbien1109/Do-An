import React, { useEffect, useState } from "react";
import getList from "../Api/list";
import { Col, Table, Image, Space, Popconfirm, Button, message } from "antd";
import BtnComponent from "../components/button/BtnComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TableProduct = () => {
  const navigate = useNavigate();
  const [callData, setCallData] = useState([]);
  const res = async () => {
    const datas = await getList.getAll();
    setCallData(datas.data);
  };
  useEffect(() => {
    res();
  }, []);
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "author",
      dataIndex: "author",
      key: "author",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "image",
      dataIndex: "img",
      key: "img",
      render: (text) => (
        <Image src={text} alt="Product Image" width={100} height={50} />
      ),
    },
    {
      title: "detail",
      dataIndex: "detail",
      key: "detail",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "audio",
      dataIndex: "audio",
      key: "audio",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BtnComponent
            name="update"
            color="primary"
            handleClick={() =>
              navigate(`/admin/${record.id}`, window.scrollTo(0, 0))
            }
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const handleDelete = async (id) => {
    try {
      await getList.delete(id);
      await res();
      toast.success("Xóa thành công");
    } catch (error) {
      toast.error("Xóa không thành công");
    }
  };
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div>
      <Col span={24}>
        <Table
          tableLayout="fixed"
          columns={columns}
          dataSource={callData}
          style={{ width: "100%", padding: "100px" }}
        />
      </Col>
    </div>
  );
};

export default TableProduct;
