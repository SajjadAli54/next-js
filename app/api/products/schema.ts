import { string, z } from "zod";

const schema = z.object({
  name: string(),
  price: z.number().gte(0).max(100),
});

export default schema;
