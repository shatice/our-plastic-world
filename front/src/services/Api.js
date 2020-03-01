import axios from 'axios';

class $API {
  constructor () {
    this.uri = process.env.REACT_APP_API_URL 
  }

  /**
   * @return {array<object>} all years 
   */
  getYears() {
    return this.get('/global/years/')
  }

  /**
   * 
   * @return {object} selected date infos
   */
  getGlobalInfos() {
    return this.get('/global')
  }

  /**
   * @return {array<object>} continents infos
   */
  getContinentsInfos() {
    return this.get('/continent')
  }

  /**
   * @return {array<object>} countries infos
   */
  getCountriesInfos() {
    return this.get('/country')
  }

  /**
   * @return {array<object>} oceans infos
   */
  getOceansInfos() {
    return this.get('TODO')
  }

  get(path) {
    return axios.get(this.uri+path)
  }

  getInfoByYear (year) {
    return this.get(`/global/${year}`)
  }
}

export default $API