import axios from 'axios';

const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
// const url = "https://covid19.mathdro.id/api";
const url1 = "https://corona.lmao.ninja/v2";

export const fetchData = async (country) => {
    let changeableUrl = `${url1}/all`;
    if(country) {
        changeableUrl = `${url1}/countries/${country}`
    }

    try{
        const { data : {          
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active ,
            critical ,
            tests
        } } = await axios.get(changeableUrl);   

        const modifieData = {         
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active ,
            critical ,
            tests
        };
        return modifieData;
    }catch(error) {
        console.log(error);
        
    }
}

// export const FetchDailyData = async (country) => {

//     try {
//         const { data } = await axios.get(`${url}/daily`);
//         const {data : {updated,cases,todayCases,deaths,todayDeaths,recovered,todayRecovered,active,critical,tests,affectedCountries}} = await axios.get(`${url1}/all`);

//         const modifieData = data.map((dailyData) => ({
//            confirmedChart : dailyData.confirmed.total,
//            deathsChart : dailyData.deaths.total,
//            dateChart : dailyData.reportDate,
//             updated,
//            cases,
//            todayCases,
//            deaths,
//            todayDeaths,
//            recovered,
//            todayRecovered,
//            active,
//            critical,
//            tests,
//            affectedCountries
//     }))
//     return modifieData;

//     } catch (error) {
//         console.log(error);
//     }
// }



export const FetchDailyData = async (country) => {

    try {
        const { data } = await axios.get(`${url}`);
        console.log('dddddddd' , data.cases);
        // const {data : {updated,cases,todayCases,deaths,todayDeaths,recovered,todayRecovered,active,critical,tests,affectedCountries}} = await axios.get(`${url1}/all`);

        // const modifieData = data.map((dailyData) => ({
        //    confirmedChart : dailyData.confirmed.total,
        //    deathsChart : dailyData.deaths,
        //    dateChart : dailyData.cases.object,
        //    recoveredChart : dailyData.hh
    // }))
    return modifieData;

    } catch (error) {
        console.log(error);
    }
}




export const fetchCountries = async () => {
    try{
     const {data} = await axios.get(`${url1}/countries`)
     return data.map((data) => data.country)
    } catch (error) {
         console.log(error);
    }
} 

