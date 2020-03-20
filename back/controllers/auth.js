const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({status: false, message: "Необходимо заполнить все поля"});
    return next()
  }

  const salt = await bcrypt.genSaltSync(10);
  password = await bcrypt.hashSync(password, salt);
  const user = await new User({ email, password });

  user.save(error => {
    if (error) {
      if (error.name === 'MongoError' && error.code === 11000) {
        res.status(422).json({status: false, message: 'Этот email уже занят'});
        return next()
      }
      // Some other error
      res.status(422).send(error);
      return next()
    }

    res.json({status: true, message: 'Пользователь создан'});
  });
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({status: false, message: "Не указан адрес электронной почты или пароль"});
    return next()
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compareSync(password, user.password))) {
    res.status(401).json({status: false, message: "Неправильный email или пароль"});
    return next()
  }

  res.json({status: true, message: 'Успешный вход'})
};

exports.signout = (req, res) => {
  console.log("it works");
  res.send("Hello World!hui234");
};
