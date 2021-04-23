
import React, {useState,useEffect} from 'react';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
import Select from 'react-select';


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[setFetchedCountries]);
    const searchList = 
    fetchedCountries.map(
        ( project_name ) => {
          return{ 
           value: project_name, 
           label: project_name 
          }
         }
        )
        
    const newFirstElement = {label : "Global",value : ""}
    const newArray = [newFirstElement].concat(searchList);

    return(
        <Select
        className={styles.formControl} 
        placeholder="Global" 
        defaultValue="" 
        options={newArray}
        onChange={(e) => handleCountryChange(e.value)} />
        )
}
export default CountryPicker;

   //   <FormControl className={styles.formControl}>
        //       <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        //           <option value="">Global</option>
        //           {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
        //       </NativeSelect>
        //   </FormControl>