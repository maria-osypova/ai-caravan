import User from "@/db/models/User";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    console.log("POST request received:", request.body);
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "linkedin",
      "role",
      "expertise",
      "level",
      "company",
      "goal",
      "city",
    ];
    for (const field of requiredFields) {
      if (!request.body[field]) {
        response.status(400).json({ status: `Missing field: ${field}` });
        return;
      }
    }
    try {
      await User.create(request.body);
      response.status(200).json({ success: true, status: "User created" });
    } catch (error) {
      console.error("Error creating user:", error.message);
      response
        .status(500)
        .json({ status: "error creating user", error: error.message });
      return;
    }
  }

  if (request.method === "GET") {
    try {
      const user = await User.findOne();
      if (!user) {
        response.status(404).json({ status: "User not found" });
        return;
      }
      response.status(200).json(user);
      return;
    } catch (error) {
      response.status(500).json({ status: "error finding user" });
      return;
    }
  }

  if (request.method === "PUT") {
    try {
      const { _id, ...updatedData } = request.body;
      const user = await User.findByIdAndUpdate(_id, updatedData, {
        new: true,
      });

      if (!user) {
        response.status(404).json({ status: "User not found" });
        return;
      }
      response.status(200).json(user);
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ status: "Error updating user" });
      return;
    }
  }
}
