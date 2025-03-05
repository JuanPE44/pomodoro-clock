import { useEffect, useRef, useCallback } from "react";

export const useFetchDevice = (fetchDevice: () => void, intervalMs: number) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startFetching = useCallback(() => {
    if (intervalRef.current) return; // Evita múltiples intervalos

    intervalRef.current = setInterval(() => {
      fetchDevice();
    }, intervalMs);
  }, [fetchDevice, intervalMs]);

  const stopFetching = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startFetching();
    return stopFetching; // Limpia el intervalo al desmontar
  }, [startFetching, stopFetching]);
};
