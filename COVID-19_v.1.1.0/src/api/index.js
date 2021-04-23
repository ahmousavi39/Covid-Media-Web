import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const { data : { confirmed, recovered , deaths , lastUpdate} } = await axios.get(changeableUrl);   

        const modifieData = {confirmed,recovered,deaths,lastUpdate};
        return modifieData;
    }catch(error) {
        console.log(error);
        
    }
}

export const FetchDailyData = async (country) => {

    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifieData = data.map((dailyData) => ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate,
    }))
    return modifieData;

    } catch (error) {
        console.log(error);
    }
}


export const fetchCountries = async () => {
    try{
     const {data : { countries }} = await axios.get(`${url}/countries`)
     return countries.map((country) => country.name)
    } catch (error) {
         console.log(error);
    }
} 

