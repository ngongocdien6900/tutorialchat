const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  postLogin: (req, res) => {
    const {
      email,
      password
    } = req.body;
    UserModel.findOne({
        "admin.email": email,
      })
      .exec()
      .then((admin) => {
        if (!admin) {
          return res.status(401).json({
            message: "Đăng nhập thất bại",
          });
        }
        bcrypt.compare(password, admin.admin.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Sai username hoặc không tồn tài",
            });
          }
          if (result) {
            const token = jwt.sign({
                _id: admin._id,
              },
              "secret", {
                expiresIn: "7d",
              }
            );
            return res.status(200).json({
              token,
              admin: admin,
            });
          }
          res.status(401).json({
            message: "Đăng nhập thất bại",
          });
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  postRegister: (req, res) => {
    const {
      email,
      fullname,
      password,
      gender
    } = req.body;

    UserModel.findOne({
        "admin.email": email,
      })
      .exec()
      .then((admin) => {
        if (admin) {
          return res.status(409).json({
            message: "Email đã tồn tại",
          });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              const admin = new UserModel({
                "admin.email": email,
                fullname,
                gender,
                "admin.password": hash,
              });
              admin
                .save()
                .then((result) => {
                  res.status(201).json({
                    message: "Tạo thành công",
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    error: err,
                  });
                });
            }
          });
        }
      });
  },
};