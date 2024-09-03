const data = {
  Users: [
    {
      name: "shakib",
      email: "shakib@gmail.com",
      password: "1234",
      phone: "01642257866",
      address: "azimpur",
    },
    {
      name: "arif",
      email: "arif@gmail.com",
      password: "5678",
      phone: "01949852374",
      address: "mirpur",
    },
  ],

  Category: [
    {
      name: "Desks",
      type: "Furniture",
      description: "this furniture is used for office partitions.",
      status: "active",
    },
    {
      name: "Phones",
      type: "Electronics",
      description: "this electronics is used for communication with each other",
      status: "active",
    },
    {
      name: "Van",
      type: "Vehicles",
      description: "this vehicles is used for business purposes",
      status: "active",
    },
  ],

  Asset: [
    {
      name: "Desks",
      code: "#3456FU567",
      location: "Room 1",
      status: "active",
    },
    {
      name: "Phones",
      code: "#34RE367",
      location: "Room 2",
      status: "active",
    },
    {
      name: "Van",
      code: "#42HF832",
      location: "Room 3",
      status: "active",
    },
  ],
};

module.exports = data;
