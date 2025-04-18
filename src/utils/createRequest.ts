import AES from 'crypto-js/aes'
import { getCookie } from '@arpansaha13/utils/browser'

export interface RequestOptions extends Omit<RequestInit, 'body' | 'method'> {
  /** @default 'GET' */
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

  body?: Record<string, any>
}

// export const FETCH_BASE_URL = import.meta.env.DEV ? 'http://localhost:8000' : 'https://api.mokshaix.in/'
export const FETCH_BASE_URL = import.meta.env.DEV ? 'https://api.mokshaix.in/' : 'https://api.mokshaix.in/'

/**
 * Create request object for Fetch API with credentials allowed.
 */
export default function createRequest(url: string, options: RequestOptions = {}): Request {
  let headers: RequestOptions['headers'] = {
    'Content-Type': 'text/plain',
  }

  console.log("options: ", options);
  alert(`options: ${options.method}`);

  if (options?.method && options.method !== 'GET') {
    console.log("options method is not get")
    alert("options method is not get");
    const csrftoken = getCookie('csrftoken')
    if (csrftoken) {
      console.log("csrftoken: ", csrftoken);
      alert(`csrftoken: ${csrftoken}`);
      headers['x-csrftoken'] = csrftoken;
    }
  }

  if (options?.headers) {
    headers = {
      ...options.headers,
      ...headers,
    }
  }

  let body

  if (options?.body) {
    try {
      // Check if the payload secret is available
      if (!import.meta.env.VITE_PAYLOAD_SECRET) {
        console.error('VITE_PAYLOAD_SECRET is not defined')
        throw new Error('Encryption failed: VITE_PAYLOAD_SECRET is not defined')
      }

      const stringified = JSON.stringify(options.body)
      body = AES.encrypt(stringified, import.meta.env.VITE_PAYLOAD_SECRET).toString()
    } catch (error) {
      console.error('Error encrypting request body:', error)
      throw error
    }
  }

  if (import.meta.env.DEV) {
    options.mode = 'cors'
  }

  return new Request(`${FETCH_BASE_URL}/api/${url}`, {
    ...options,
    credentials: 'include',
    body,
    headers,
  })
}
