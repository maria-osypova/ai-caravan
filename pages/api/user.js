import User from "@/db/models/User";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

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
