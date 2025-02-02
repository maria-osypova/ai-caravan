import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  photo: {
    type: String,
    required: true,
    default: "/images/default-avatar.jpg",
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  linkedin: {
    type: String,
    required: true,
    match: [
      /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
      "Please enter a valid LinkedIn profile URL",
    ],
  },
  role: { type: String, required: true },
  expertise: {
    type: String,
    required: true,
    enum: [
      "AI",
      "Data",
      "Engineering",
      "Business",
      "Product",
      "Marketing",
      "Operations",
      "Investments",
    ],
  },
  level: {
    type: String,
    required: true,
    enum: [
      "Junior",
      "Mid-Level",
      "Senior",
      "Lead",
      "Principal",
      "Head of",
      "Director",
      "Vice President",
      "C-Level",
      "Founder",
      "Investor / Venture Capitalist",
    ],
  },
  company: {
    type: String,
    required: true,
  },
  unemployed: {
    type: Boolean,
    default: false,
  },
  goal: {
    type: String,
    required: true,
    enum: [
      "A new job opportunity",
      "Career growth support and mentorship",
      "Onboarding to local ecosystem",
      "New connections and friends",
      "Finding a co-founder",
      "Seeking investment for startup",
      "Seeking a project to invest in",
      "Hiring talent",
      "Exploring AI & Data",
    ],
  },
  city: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
