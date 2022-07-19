import axios from 'axios'
import { config } from 'dotenv'
import {CovidEntity} from './../entity/covidEntity'

config()

const API_URL = process.env.API_URL

const api = axios.create({ baseURL:  API_URL})

export async function getSummary () {
  const result = await api.get('/summary')

  const data : CovidEntity = {
    cases: 0,
    country: '',
    ranking: 0 
  }

    try {
      if(result?.status === 200) {
        console.log(result.data)
      }
      
    } catch (error) {
      console.log(error)
    }


  return data
}



