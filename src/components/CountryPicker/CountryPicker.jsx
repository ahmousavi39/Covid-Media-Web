import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';


var coun = window.location.pathname;
coun.indexOf(1);
coun.toLowerCase();
coun = coun.split("/")[4];

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [])
    
    const searchList =
        fetchedCountries.map(
            (project_name) => {
                return {
                    value: project_name,
                    label: project_name
                }
            }
        )

    const newFirstElement = { label: "Global", value: "" }
    const newArray = [newFirstElement].concat(searchList);

    return (
        <div className={styles.formControl} style={{ textAlign: "center" }} >
            <p>{t('Select.1')}</p>
            <Select
                className={styles.formControl}
                placeholder={coun == undefined ? 'Global' : coun.length < 2 ? 'Global' : coun}
                defaultValue=""
                options={newArray}
                onChange={(e) => props.handleCountryChange(e.value)} /></div>
    )
}
export default CountryPicker;