import React from 'react';
import { getUserById } from '../services/userApi';
import type { UserInfo } from '../types/user';

export function userUser(id?: string) {
  const [user, setUser] = React.useState<UserInfo | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    getUserById(id)
      .then(data => setUser(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading, error };
}
