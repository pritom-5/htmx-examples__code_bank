const path = require("path");

class Car {
  /**
   * @param {string} brand
   * @param {string[]} models
   */
  constructor(brand, models) {
    this.brand = brand;
    this.models = models;
  }
}

class Cars {
  /** @type {{[key: string]: Car}} */
  CarsObj = {};
  /**
   * @param {string} brand
   * @param {string[]} models
   */
  addCar(brand, models) {
    this.CarsObj[brand] = new Car(brand, models);
  }

  /** @param {string} brand  */
  getModels(brand) {
    return this.CarsObj[brand].models;
  }

  getAllCars() {
    const cars = Object.keys(this.CarsObj);
    return cars;
  }
}

const cars = new Cars();
cars.addCar("Toyota", ["T1", "T2", "T3"]);
cars.addCar("Audi", ["A1", "A2", "A3"]);
cars.addCar("BMW", ["B1", "B2", "B3"]);

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveCarsSelection(req, res) {
  const selected_car = req.query.cars;

  if (typeof selected_car !== "string") {
    res.send("request is not correct");
    return;
  }

  const models = cars.getModels(selected_car);

  console.log(selected_car, models);

  res.render(
    path.resolve(__dirname, "../../public/partials/pick_car_model.ejs"),
    { models }
  );
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function getSelectedCar(req, res) {
  const car = req.query;

  console.log(car);

  res.send(JSON.stringify(car));
}

module.exports = { serveCarsSelection, getSelectedCar, cars };
