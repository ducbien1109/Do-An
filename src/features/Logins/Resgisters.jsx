import { Popconfirm } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import $ from "jquery";

const Resgisters = () => {
  const navigate = useNavigate();
  $(document).ready(function () {
    $("#form-register").submit(function (e) {
      e.preventDefault();
      var userName = $("#register-username").val();
      var password = $("#register-password").val();
      var confirmPassword = $("#confirm-password").val();

      var newUser = {
        userName: userName,
        password: password,
      };
      if (password.length > 5) {
        if (password === confirmPassword) {
          localStorage.setItem(userName, JSON.stringify(newUser));
          alert("ok");
          navigate("/logins");
        } else {
          alert("Mật khẩu và mật khẩu xác nhận không khớp.");
        }
      } else {
        alert("phải nhập trên 5 kí tự");
        localStorage.setItem(userName, JSON.stringify(newUser));
      }
    });
  });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div class="register-container">
          <div class="register-header">
            <h2>register</h2>
          </div>
          <form id="form-register">
            <div class="form-group">
              <label for="username">Username:</label>
              <input
                type="text"
                id="register-username"
                name="username"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                id="register-password"
                name="password"
                required
              />
            </div>
            <div class="form-group">
              <label for="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
              />
            </div>
            <div class="form-group">
              <Popconfirm
                title="login success...!"
                description="Are you sure to delete this task?"
                // open={open}
                // // onOpenChange={handleOpenChange}
                // onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <button type="submit" danger>
                  Đăng kí
                </button>
              </Popconfirm>
            </div>
            {/* <button onClick={toPageRegister}>Register</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resgisters;
