import { QueryClient } from '@tanstack/react-query'
import type { NamedApiResourceList } from './types'
import { buildUrl, getData, type Identifier } from './client-helpers'

/**
 * Creates and configures a TanStack QueryClient.
 * This client is used to manage query caching, retries, and other global query behaviors.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
      gcTime: 1000 * 60 * 60 * 1, // Garbage collection time: 1 hour
      retry: 1, // Retry failed requests 1 time
      refetchOnWindowFocus: false // Refetch data when the window regains focus
    }
  }
})

/**
 * Fetches a single item from the PokeAPI
 * @template T The expected return type
 * @param endpoint The API endpoint (e.g., 'pokemon')
 * @param id The resource identifier (name or ID number)
 * @returns Promise resolving to the requested item or undefined if no content
 */
export const getResource = async <T>(endpoint: string, id?: Identifier): Promise<T> => {
  const url = buildUrl(endpoint, id)

  const response = getData<T>(url)

  return response
}

/**
 * Fetches a paginated list of resources from the PokeAPI
 * @param endpoint The API endpoint (e.g., 'pokemon')
 * @param limit Maximum number of results to return
 * @param offset Starting offset for paginated results
 * @returns Promise resolving to NamedApiResourceList or undefined if no content
 */
export const listResources = async (
  endpoint: string,
  limit?: number,
  offset?: number
): Promise<NamedApiResourceList | undefined> => {
  // Build query string for limit and offset
  const params = new URLSearchParams()
  if (limit !== undefined) params.append('limit', String(limit))
  if (offset !== undefined) params.append('offset', String(offset))
  const queryString = params.toString()

  const url = buildUrl(endpoint, undefined, queryString)

  const response = getData<NamedApiResourceList | undefined>(url)

  return response
}
