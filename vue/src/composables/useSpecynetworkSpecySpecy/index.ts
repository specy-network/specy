/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useSpecynetworkSpecySpecy() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.SpecynetworkSpecySpecy.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryTask = (owner: string, name: string,  options: any) => {
    const key = { type: 'QueryTask',  owner,  name };    
    return useQuery([key], () => {
      const { owner,  name } = key
      return  client.SpecynetworkSpecySpecy.query.queryTask(owner, name).then( res => res.data );
    }, options);
  }
  
  const QueryTaskAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryTaskAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.SpecynetworkSpecySpecy.query.queryTaskAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryExecutor = (address: string,  options: any) => {
    const key = { type: 'QueryExecutor',  address };    
    return useQuery([key], () => {
      const { address } = key
      return  client.SpecynetworkSpecySpecy.query.queryExecutor(address).then( res => res.data );
    }, options);
  }
  
  const QueryExecutorAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryExecutorAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.SpecynetworkSpecySpecy.query.queryExecutorAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryDeposit = (address: string,  options: any) => {
    const key = { type: 'QueryDeposit',  address };    
    return useQuery([key], () => {
      const { address } = key
      return  client.SpecynetworkSpecySpecy.query.queryDeposit(address).then( res => res.data );
    }, options);
  }
  
  const QueryDepositAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryDepositAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.SpecynetworkSpecySpecy.query.queryDepositAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryCurrentExecutorStatus = ( options: any) => {
    const key = { type: 'QueryCurrentExecutorStatus',  };    
    return useQuery([key], () => {
      return  client.SpecynetworkSpecySpecy.query.queryCurrentExecutorStatus().then( res => res.data );
    }, options);
  }
  
  const QueryPool = ( options: any) => {
    const key = { type: 'QueryPool',  };    
    return useQuery([key], () => {
      return  client.SpecynetworkSpecySpecy.query.queryPool().then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QueryTask,QueryTaskAll,QueryExecutor,QueryExecutorAll,QueryDeposit,QueryDepositAll,QueryCurrentExecutorStatus,QueryPool,
  }
}