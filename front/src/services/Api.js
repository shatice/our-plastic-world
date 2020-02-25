import axios from 'axios';
import { array } from '@amcharts/amcharts4/core';

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
   * @param {number} date selected date 
   * @return {object} selected date infos
   */
  getGlobalInfos(date) {
    return this.get('/TODO/' + date)
  }

  /**
   * @return {array<object>} continents infos
   */
  getContinentsInfos() {
    return this.get('TODO')
  }

  /**
   * @return {array<object>} countries infos
   */
  getCountriesInfos() {
    return this.get('TODO')
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