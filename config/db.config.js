module.exports = {
    HOST: "localhost",
    USER: "zusername",
    PASSWORD: "#Pass1234",
    DB: "zhotel",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };