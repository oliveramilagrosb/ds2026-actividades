import { useState, useEffect } from "react";
import { apiFetch } from "../services/api";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let montado = true;
    setLoading(true);
    setError(null);

    apiFetch<T>(url)
      .then((res) => {
        if (montado) setData(res);
      })
      .catch((err) => {
        if (montado) setError(err.message);
      })
      .finally(() => {
        if (montado) setLoading(false);
      });

    return () => {
      montado = false;
    };
  }, [url]);

  return { data, loading, error };
}