import { useEffect } from "react";
import { fetchUser, clearUser, clearError } from "../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";

export function useUser(id?: string) {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      void dispatch(fetchUser(id));
    }
  }, [id, dispatch]);

  return { user, loading, error };
}

export function useUserActions() {
  const dispatch = useAppDispatch();

  return {
    fetchUser: (id: string) => dispatch(fetchUser(id)),
    clearUser: () => dispatch(clearUser()),
    clearError: () => dispatch(clearError()),
  };
}

// Hook for just the user state (no automatic fetching)
export function useUserState() {
  return useAppSelector((state) => state.user);
}
