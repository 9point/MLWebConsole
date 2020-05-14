import { Collection, Query } from '.';
import { createQuery, listenQuery } from '.';
import { Model, ModelModule } from '../models/types';
import { useEffect, useMemo } from 'react';

export function useCreateQuery<
  TType extends string,
  TModel extends Model<TType>
>(
  module: ModelModule<TType, any, TModel>,
  cb: (collection: Collection) => Query<TType, TModel>,
) {
  // @ts-ignore - TODO: Fix this
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
