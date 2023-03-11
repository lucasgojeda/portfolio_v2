/** Libraries */
import { getEnvironmets } from './getEnvironmets'
const { VITE_API_URL, VITE_API_ECOMMERCE_BACK_URL } = getEnvironmets()

export const pingToEmailSender = (): void => {
  fetch(`${VITE_API_URL}/ping`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Email sender')
    })
    .catch((error) => {
      console.error(error)
    })
}

export const pingToEcommerceBack = (): void => {
  fetch(`${VITE_API_ECOMMERCE_BACK_URL}/dashboard/unlogged`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pong - Ecommerce back')
    })
    .catch((error) => {
      console.error(error)
    })
}
