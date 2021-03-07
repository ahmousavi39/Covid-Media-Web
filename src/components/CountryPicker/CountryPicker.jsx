import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries]);
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
                placeholder="Global"
                defaultValue=""
                options={newArray}
                onChange={(e) => props.handleCountryChange(e.value)} /></div>
    )
}
export default CountryPicker;