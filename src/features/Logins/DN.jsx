import { Popconfirm } from "antd";
import $ from "jquery";

import React from "react";
import { useNavigate } from "react-router";

const DN = () => {
  const navigate = useNavigate();
  $(document).ready(function () {
    $("#form-login").submit(function (e) {
      e.preventDefault();
      var userName = $("#login-username").val();
      var password = $("#login-password").val();
      var storeLocal = localStorage.getItem(userName);
      if (storeLocal && JSON.parse(storeLocal).password === password) {
        alert("Đăng nhập thành công");
        localStorage.setItem("isLogin", true);
        navigate("/admin");
      } else {
        alert("thất bại");
      }
    });
  });
  const toPageRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div class="login-container">
          <div class="login-header">
            <h2>Login</h2>
          </div>
          <form id="form-login">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="login-username" name="username" required />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                id="login-password"
                name="password"
                required
              />
            </div>
            <div class="form-group">
              <Popconfirm
                title="login success...!"
                description="Are you sure to delete this task?"
                //   open={open}
                //   onOpenChange={handleOpenChange}
                //   onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <button type="submit" danger>
                  đăng nhập
                </button>
              </Popconfirm>
            </div>
            <button onClick={toPageRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DN;
