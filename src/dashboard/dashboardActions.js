import axios from 'axios'

export function getSummary() {
  // const request = axios.get('')
  const request = {credit: 800, debt: 700};
  return {
    type: 'SUMMARY_FETCHED',
    payload: request
  }
}