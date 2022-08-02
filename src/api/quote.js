import axios from 'axios'

function getQuote() {
  let URL = 'https://api.adviceslip.com/advice'
  return axios.get(URL)
}

export default {
  getQuote
}
