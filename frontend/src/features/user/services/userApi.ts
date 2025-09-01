import { BACKEND_API_URL } from '../../../app/config';
import type { UserInfo } from '../types/user';

export async function getUserById(id: string): Promise<UserInfo> {
  const res = await fetch(`${BACKEND_API_URL}/users/${id}`);
  if (!res.ok) throw new Error('User not found');
  const data = await res.json();
  return data;
}
