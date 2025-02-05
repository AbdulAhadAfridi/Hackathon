import axios from "axios";

export default async function handler(
  req: { method: string; body: { message: unknown } },
  res: {
    status: (arg0: number) => {
      (): unknown;
      new (): unknown;
      json: { (arg0: { reply: unknown }): void; new (): unknown };
      end: { (arg0: string): void; new (): unknown };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      // Replace with your chatbot API
      const response = await axios.post("https://api.example.com/chatbot", {
        message,
      });

      res.status(200).json({ reply: response.data.reply });
    } catch (error) {
      console.error("Chatbot API error:", error);
      res.status(500).json({ reply: "Sorry, something went wrong." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed  `);
  }
}