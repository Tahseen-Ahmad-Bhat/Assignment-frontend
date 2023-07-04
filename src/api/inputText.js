import client from "./client";

export const sendText = async (text) => {
  try {
    const { data } = await client.post("/input/text", { text });
    return data;
  } catch (error) {
    return { error: error.message || "Something went wrong!" };
  }
};
