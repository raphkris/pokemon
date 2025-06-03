import { QueryClient } from '@tanstack/react-query'
import { API_BASE_URL } from './config'
import type { NamedApiResourceList } from './types'

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
 * Interface for custom options you might want to pass to the fetcher.
 * Extends standard RequestInit.
 */
interface FetchDataOptions extends RequestInit {
  // You can add custom options here if needed in the future
}

interface QueryParameters {
  limit?: number
  offset?: number
  [key: string]: string | number | undefined
}

/**
 * A generic data fetching function.
 * This will be used as the `queryFn` in TanStack Query's `useQuery` hooks.
 *
 * @param endpoint The API endpoint path (e.g., 'pokemon/pikachu').
 * @param queryParameters Optional object for query parameters like limit and offset.
 * @param apiVersion The API version string (e.g., 'v2'). Defaults to 'v2'.
 * @param options Optional fetch options (RequestInit).
 * @returns A promise that resolves to the fetched data (type T).
 */
export async function fetchData<T>(
  endpoint: string,
  queryParameters?: QueryParameters,
  apiVersion: string = 'v2',
  options?: FetchDataOptions
): Promise<T> {
  const params = new URLSearchParams()
  if (queryParameters) {
    Object.entries(queryParameters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value))
      }
    })
  }

  const queryString = params.toString()
  const fullEndpoint = `${endpoint.startsWith('/') ? endpoint.substring(1) : endpoint}${queryString ? `?${queryString}` : ''}`

  const url = `${API_BASE_URL}/${apiVersion}/${fullEndpoint}`

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...options?.headers
  }

  try {
    const response = await fetch(url, { ...options, headers })

    if (!response.ok) {
      let errorData
      try {
        // Attempt to parse error response as JSON
        errorData = await response.json()
      } catch (e) {
        // If response is not JSON, use status text
        errorData = {
          message: response.statusText,
          detail: response.statusText
        }
      }
      // Construct a more informative error message
      const errorMessage =
        errorData?.detail || errorData?.message || `Request failed with status ${response.status}`
      const error = new Error(errorMessage) as Error & {
        status?: number
        data?: any
      }
      error.status = response.status
      error.data = errorData // Attach the parsed error data
      throw error
    }

    if (response.status === 204) {
      // No Content
      return undefined as T
    }

    return response.json() as Promise<T>
  } catch (error) {
    console.error(`API request to ${url} failed:`, error)
    throw error // Re-throw the error to be handled by TanStack Query
  }
}

export type Identifier = number | string

/**
 * Fetches a single item from the PokeAPI
 * @template T The expected return type
 * @param endpoint The API endpoint (e.g., 'pokemon')
 * @param id The resource identifier (name or ID number)
 * @returns Promise resolving to the requested item or undefined if no content
 */
export const getItem = async <T>(endpoint: string, id: Identifier): Promise<T | undefined> => {
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
export const listItems = async (
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

/**
 * Constructs a complete URL for PokeAPI requests
 * @param endpoint The API endpoint path
 * @param id Optional resource identifier
 * @param queryString Optional query parameters
 * @returns Fully constructed API URL
 */
const buildUrl = (endpoint: string, id?: Identifier, queryString?: string) => {
  let url = `${API_BASE_URL}/${endpoint}`

  if (id) url += `/${id.toString()}`

  if (queryString && queryString.length > 0) url += `?${queryString}`

  return url
}

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

/**
 * Core data fetching function for PokeAPI
 * @template T Expected response type
 * @param url Complete API URL to fetch
 * @returns Promise resolving to response data or undefined for 204 responses
 * @throws Detailed error object with status code and error data
 */
const getData = async <T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url, { headers })

    if (response.status === 204) return undefined as T

    if (!response.ok) {
      let errorData

      try {
        // Attempt to parse error response as JSON
        errorData = await response.json()
      } catch (e) {
        // If response is not JSON, use status text
        errorData = {
          message: response.statusText,
          detail: response.statusText
        }
      }

      // Construct a more informative error message
      const errorMessage =
        errorData?.detail || errorData?.message || `Request failed with status ${response.status}`

      const error = new Error(errorMessage) as Error & {
        status?: number
        data?: any
      }

      error.status = response.status
      error.data = errorData // Attach the parsed error data

      throw error
    }

    return response.json() as Promise<T>
  } catch (error) {
    console.error(`API request to ${url} failed:`, error)
    throw error // Re-throw the error to be handled by TanStack Query
  }
}
