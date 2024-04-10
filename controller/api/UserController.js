const User = require("../../models/user");

// lấy tất cả user
exports.getUsers = async (req, res, next) => {
  const user = await User.findAll({
    attributes: ["id", "name", "email", "password"],
  });
  res.status(200).json({
    messages: "Danh sách User",
    dataUser: user,
  });
};

// lấy 1 user
exports.getUsersById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "Invalid User ID",
      data: [],
    });
  }
  const Users = await User.findByPk(id, {
    attributes: ["name", "email", "password"],
  });
  res.status(200).json({
    messages: "User by id",
    dataUser: Users,
  });
};

// thêm 1 user

exports.postUser = async (req, res, next) => {
  let = { name, email, password } = req.body;

  const user = {
    name: name,
    email: email,
    password: password,
  };

  const users = await User.create(user);
  res.status(201).json({
    messages: "Thêm users thành công !",
    dataUser: users,
  });
};

// sửa
exports.postEditUsers = async (req, res, next) => {
  const Id = parseInt(req.params.id);
  if (isNaN(Id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: [],
    });
  }
  const values = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const users = await User.update(values, {
    where: {
      id: Id,
    },
  });
  res.status(201).json({
    messages: "Cập nhật user thành công !",
    dataUser: users,
  });
};


// xóa User
exports.delUsers =  async (req, res, next) => {
  const Id = req.params.id;

  const user = await User.destroy({
    where: {
      id: Id,
    }
  });
    res.status(200).json({
      messages: "user đã được xóa thành công!",
      delUser: user,
    });
  }
