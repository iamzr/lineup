import { BACKEND_API_URL } from "../../../app/config";
import type { UserInfo } from "../types/user";
import { z } from "zod";

const UserInfoSchema: z.ZodType<UserInfo> = z.object({
  id: z.number(),
  email: z.email(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.url(),
});

export async function getUserById(id: string): Promise<UserInfo> {
  const res = await fetch(`${BACKEND_API_URL}/users/${id}`);
  if (!res.ok) throw new Error("User not found");
  const parsed = UserInfoSchema.parse(await res.json());
  return parsed;
}
