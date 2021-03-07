import axios from 'axios';

const url = "https://corona.lmao.ninja/v3/covid-19";
const urlHisory = 'https://disease.sh/v3/covid-19/historical'

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
        }

        for (const [key, value] of Object.entries(data.recovered)) {
            recoveredArray.push(value);
        }

        casesArray.map((value, index) => {
            if (index == 0) {
                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newCasesArray.push({ 'x': dateFinal, 'y': value });
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = casesArray[lastIndex];
                let newIndexValue = value - lastIndexValue;

                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newCasesArray.push({ 'x': dateFinal, 'y': newIndexValue });
            }
        })

        deathsArray.map((value, index) => {
            if (index == 0) {
                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newDeathsArray.push({ 'x': dateFinal, 'y': value });
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = deathsArray[lastIndex];
                let newIndexValue = value - lastIndexValue;

                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newDeathsArray.push({ 'x': dateFinal, 'y': newIndexValue });
            }
        })

        recoveredArray.map((value, index) => {
            if (index == 0) {
                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
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
                var splitted = dateArray[index].split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                const dateFinal = new Date(dateStr);
                newRecoveredArray.push({ 'x': dateFinal, 'y': newIndexValue });
            }
        })

        // newCasesArray = newCasesArray.slice(-30);
        // newDeathsArray = newDeathsArray.slice(-30);
        // newRecoveredArray = newRecoveredArray.slice(-30);

        return [newCasesArray, newDeathsArray, newRecoveredArray];
    } catch (error) {
        console.log(error);
    }
}




export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        return data.map((data) => data.country)
    } catch (error) {
        console.log(error);
    }
}

