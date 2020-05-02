import { createQuery, listenQuery } from '.';
import { useEffect, useMemo } from 'react';

export function useCreateQuery(module: any, cb: Function) {
  return useMemo(() => createQuery(module, cb), [module]);
}

export function useListenQuery(query: any, cb: (changeSet: any) => void) {
  useEffect(() => {
    const subscription = listenQuery(query, (changeSet: any) => {
      cb(changeSet);
    });

    return () => subscription.stop();
  }, []);
}
