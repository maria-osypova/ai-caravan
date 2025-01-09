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
}
