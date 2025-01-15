import User from "@/db/models/User";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const users = await User.find();
      if (users.length === 0) {
        response.status(404).json({ status: "Users not found" });
        return;
      }
      response.status(200).json(users);
    } catch (error) {
      response.status(500).json({ status: "error finding all users", error: error.message });
    }
  } else {
    response.status(405).json({ status: "Method not allowed" });
  }
}
