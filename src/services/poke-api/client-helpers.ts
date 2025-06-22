import { API_BASE_URL } from './config'

export type Identifier = number | string

/**
 * Constructs a complete URL for PokeAPI requests
 * @param endpoint The API endpoint path
 * @param id Optional resource identifier
 * @param queryString Optional query parameters
 * @returns Fully constructed API URL
 */
export const buildUrl = (endpoint: string, id?: Identifier, queryString?: string) => {
  let url = `${API_BASE_URL}/${endpoint}`

  if (id) url += `/${id.toString()}`

  if (queryString && queryString.length > 0) url += `?${queryString}`

  return url
}

/**
 * Core data fetching function for PokeAPI
 * @template T Expected response type
 * @param url Complete API URL to fetch
 * @returns Promise resolving to response data or undefined for 204 responses
 * @throws Detailed error object with status code and error data
 */
export const getData = async <T>(url: string): Promise<T> => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    const response = await fetch(url, { headers })

    if (response.status === 204) return undefined as T

    if (!response.ok) {
      let errorData

      try {
        // Attempt to parse error response as JSON
        errorData = await response.json()
      } catch {
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
        data?: unknown
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
