import { z } from "zod";

export const removeProductFromCartSchema = z.object({
  //Receber o id do produto que quero remover
  cartItemId: z.uuid(),
});
