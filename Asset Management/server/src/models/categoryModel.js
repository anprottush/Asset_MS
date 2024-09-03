const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const catagorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Caegory Name is required"],
      // minlength: [3, 'Username must be at least 3 characters long'],
      // maxlength: [20, 'Username must be at most 20 characters long'],
      // trim: true,
    },

    type: {
      type: String,
      required: [true, "Category Type is required"],
      // trim: true,
      // lowarcase: true,
      // validate: {
      //   validator:  (v) => {
      //     return /^\w+([\/-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

      //   },
      //   message: 'Please enter a valid email address'
      // },
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      // minlength: [6, 'Password must be at least 6 characters long'],
      // validate: {
      //   validator: (v) => {
      //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
      //   },
      //   message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number',
      // },

      // set: (v) => {
      //   return bcrypt.hashSync(v, bcrypt.genSaltSync(10));
      // },
    },

    status: {
      type: String,
      //required: [true, "Status is required"],
    },

    // isCreated: {
    //   default: 'false'
    // },

    // isUpdated: {
    //   default: 'false'
    // },

    // isDeleted: {
    //   default: 'false'
    // }
  },
  {
    timestamps: true,
  }
);

const Category = model("category", catagorySchema);
module.exports = Category;
