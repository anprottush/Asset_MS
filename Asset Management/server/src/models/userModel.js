// name, email, password, about

const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      // minlength: [3, 'Username must be at least 3 characters long'],
      // maxlength: [20, 'Username must be at most 20 characters long'],
      // trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      // trim: true,
      // lowarcase: true,
      // validate: {
      //   validator:  (v) => {
      //     return /^\w+([\/-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

      //   },
      //   message: 'Please enter a valid email address'
      // },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      // minlength: [6, 'Password must be at least 6 characters long'],
      // validate: {
      //   validator: (v) => {
      //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
      //   },
      //   message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number',
      // },

      set: (v) => {
        return bcrypt.hashSync(v, bcrypt.genSaltSync(10));
      },
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
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

// userSchema.pre("save", async (next) => {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const User = model("user", userSchema);
module.exports = User;
