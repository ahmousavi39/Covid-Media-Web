import axios from 'axios';

const url = "https://disease.sh/v3/covid-19";
const urlHisory = 'https://disease.sh/v3/covid-19/historical'
const urlVacine = 'https://disease.sh/v3/covid-19/vaccine/coverage';


// const fetchPopulatoin = async () => {
//     let populationData = [];
//     try {
//         const { data } = await axios.get(`${url}/countries`)
//         data.map(value => { populationData.push({ "population": value.population, "country": value.country }) });
//         return populationData;
//     } catch (error) {
//         console.log(error);
//     }
// }


export const fetchData = async (country) => {
    let changeableUrl = `${url}/all`;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: {
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
            critical,
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
            active,
            critical,
            tests
        };

        return modifieData;
    } catch (error) {
        console.log(error);

    }
}



export const fetchHistoricalData = async (country) => {
    let changeableUrl = `${urlHisory}/all?lastdays=all`;
    if (country) {
        changeableUrl = `${urlHisory}/${country}?lastdays=all`
    }

    try {

        let data = await axios.get(changeableUrl);

        if (country) {
            data = data.data.timeline;
        } else {
            data = data.data;
        }

        let casesArray = [];
        let deathsArray = [];
        let recoveredArray = [];

        let dateArray = [];

        let newCasesArray = [];
        let newDeathsArray = [];
        let newRecoveredArray = [];


        for (const [key, value] of Object.entries(data.cases)) {
            casesArray.push(value);
            dateArray.push(key);
        }

        for (const [key, value] of Object.entries(data.deaths)) {
            deathsArray.push(value);
            if (!key) {
                console.log('error')
            }
        }

        for (const [key, value] of Object.entries(data.recovered)) {
            recoveredArray.push(value);
            if (!key) {
                console.log('error')
            }
        }

        var splitted;
        var dateStr;

        casesArray.map((value, index) => {
            if (index === 0) {
                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newCasesArray.push({ 'x': dateFinal, 'y': value });
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = casesArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                if(newIndexValue < 0){
                    newIndexValue = 0;
                    newCasesArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }else{
                    newCasesArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }
            }
            return;
        })

        deathsArray.map((value, index) => {
            if (index === 0) {
                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newDeathsArray.push({ 'x': dateFinal, 'y': value });
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = deathsArray[lastIndex];
                let newIndexValue = value - lastIndexValue;

                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                if(newIndexValue < 0){
                    newIndexValue = 0;
                    newDeathsArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }else{
                    newDeathsArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }
            }
            return;
        })

        recoveredArray.map((value, index) => {
            if (index === 0) {
                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newRecoveredArray.push({ 'x': dateFinal, 'y': value });
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = recoveredArray[lastIndex];
                let newIndexValue;

                if (!country) {
                    switch (index) {
                        case 325:
                            newIndexValue = 516003;
                            break;
                        case 326:
                            newIndexValue = 411665;
                            break;
                        case 327:
                            newIndexValue = 527725;
                            break;
                        case 328:
                            newIndexValue = 499836;
                            break;
                        case 329:
                            newIndexValue = 598651;
                            break;
                        default:
                            newIndexValue = value - lastIndexValue;
                    }
                } else {
                    newIndexValue = value - lastIndexValue;
                }
                splitted = dateArray[index].split("/");
                dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                if(newIndexValue < 0){
                    newIndexValue = 0;
                    newRecoveredArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }else{
                    newRecoveredArray.push({ 'x': dateFinal, 'y': newIndexValue });
                }
            }
            return;
        })

        return [newCasesArray, newDeathsArray, newRecoveredArray];
    } catch (error) {
        console.log(error);
    }
}



// export const fetchVaccineCountries = async () => {
//     let Url = `${urlVacine}/countries?lastdays=1`;


//     try {
//         const data = await axios.get(Url);
//         let useableData = data.data;
//         let fetchedPopulationUseable = await fetchPopulatoin();

//         let countries = [];
//         let statics = [];
//         let population = [];
//         let percent = [];

//         //Sorting coutries, more to less vaccinaltions
//         let currentDate = Object.keys(useableData[0].timeline);
//         let finalData = useableData.sort((a, b) => parseFloat(b.timeline[currentDate]) - parseFloat(a.timeline[currentDate]));

//         if ((await fetchedPopulationUseable).length > 100) {

//             finalData.map((value) => {
//                 let popu = [];
//                 let vaccines = [];
//                 fetchedPopulationUseable.map(popuValue => {
//                     if (value.country == popuValue.country) {
//                         popu = popuValue.population;
//                         population.push(popuValue.population)
//                     }
//                 });
//                 countries.push(value.country);
//                 for (const [key, returnValue] of Object.entries(value.timeline)) {
//                     vaccines = returnValue;
//                     statics.push(returnValue);
//                 };
//                 percent.push(Math.round(vaccines / popu * 100))
//             });

//         }

//         return { countries, statics, population, percent };

//     } catch (error) {
//         return error;
//     }
// };


export const fetchVacineData = async (country) => {
    let changeableUrl = `${urlVacine}?lastdays=30`;
    if (country) {
        changeableUrl = `${urlVacine}/countries/${country}?lastdays=all`;
    };

    try {
        const data = await axios.get(changeableUrl);

        let vaccineArray = [];
        let dateArray = [];
        let allDaysCases = [];

        let modifieData;

        var splitted;
        var dateStr;

        if (country) {
            typeof data.data.timeline === "object" ? modifieData = data.data.timeline : modifieData = data.data.message;
        } else {
            modifieData = data.data;
        }

        for (const [key, value] of Object.entries(modifieData)) {
            vaccineArray.push(value);
            splitted = key.split("/");
            dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
            dateArray.push(dateStr);
        }


        vaccineArray.map((value, i) => {
            if (i === 0) {
                allDaysCases.push(value);
            } else {
                let lastIndex = i - 1;
                let lastIndexValue = vaccineArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                allDaysCases.push(newIndexValue)
            }
        });

        let allCases = { cases: vaccineArray[vaccineArray.length - 1], updated: dateArray[dateArray.length - 1] };
        let todayCases = { cases: vaccineArray[vaccineArray.length - 1] - vaccineArray[vaccineArray.length - 2], updated: dateArray[dateArray.length - 1] };

        return { allCases, todayCases, "allDaysCases": [allDaysCases, dateArray] };

    } catch (error) {
        console.log(error);
        return { "allCases": { cases: 0, updated: new Date('0-0-0') }, "todayCases": { cases: 0, updated: new Date('0-0-0') }, "allDaysCases": { cases: 0, updated: new Date('0-0-0') } };
    }

}

export const raceChart = async () => {

    try {
        const { data } = await axios.get(`${urlHisory}`);
        const finalData = [];

        data.map((value, index) => {
            
        })
        return finalData;
    } catch (error) {
        console.log(error);
        return { "allCases": { cases: 0, updated: new Date('0-0-0') }, "todayCases": { cases: 0, updated: new Date('0-0-0') }, "allDaysCases": { cases: 0, updated: new Date('0-0-0') } };
    }

};


export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        return data.map((data) => data.country)
    } catch (error) {
        console.log(error);
    }
}

