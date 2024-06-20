import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const testList = [
    {
      nome: "Roberto",
      email: "test@example.com",
    },
  ];

  // Fail fast
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  return response.status(200).json(testList);
}
