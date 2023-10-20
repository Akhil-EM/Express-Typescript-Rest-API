import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
});

const UserSchema = mongoose.model("User", userSchema);

export {
    UserSchema
};
