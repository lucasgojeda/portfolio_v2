/** Types */
import { type EnvironmentVariables } from '../vite-env'

export const getEnvironmets = (): EnvironmentVariables => {
  // import.meta.env;

  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_API_ECOMMERCE_BACK_URL: import.meta.env.VITE_API_ECOMMERCE_BACK_URL,
  }
}
