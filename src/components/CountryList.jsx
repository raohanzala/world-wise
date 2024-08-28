import CountryItem from './CountryItem'
import Spinner from './Spinner'
import Message from './Message'
import styles from './CountryList.module.css'
import PropTypes from 'prop-types'
import { useCities } from '../Contexts/Contexts'


CountryList.propTypes = {
  cities : PropTypes.array,
  isLoading: PropTypes.bool,
  message : PropTypes.string,
}

function CountryList() {

  const {cities, isLoading} = useCities()

  console.log(cities)

  if(isLoading) return <Spinner/>
  if(!cities.length) return <Message message={'Add you first city by clicking on a city on the map'}/>

  const countries = cities.reduce((arr, city)=>{
    if(!arr.map(el=>el.country).includes(city.country)) return [...arr, {country : city.country, emoji : city.emoji}]
    else return arr
  }, [])


  return (
    <ul className={styles.countryList}>
      {countries.map(country=>{ 
        console.log(country);
       return <CountryItem country={country} key={country.country} />
      })}
    </ul>
  )
}

export default CountryList
