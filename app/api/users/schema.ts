import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please provide the valid email address"),
});

export default schema;
