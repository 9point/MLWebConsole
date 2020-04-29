import { createQuery, listenQuery } from '.';
import { useEffect, useMemo } from 'react';

export function useCreateQuery(module: any, cb: Function) {
  return useMemo(() => createQuery(module, cb), []);
}

export function useListenQuery(query: any, cb: (changeSet: any) => void) {
  useEffect(() => {
    console.log('calling effect');
    const subscription = listenQuery(query, (changeSet: any) => {
      cb(changeSet);
    });

    return () => subscription.stop();
  }, []);
}
