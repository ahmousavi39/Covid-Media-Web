import requests
import os
import datetime
from datetime import date, timedelta
import os.path
from os import path
import sys
import shutil

country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Caribbean Netherlands",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "DRC",
    "Denmark",
    "Diamond Princess",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "MS Zaandam",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Réunion",
    "S. Korea",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St. Barth",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turks and Caicos Islands",
    "UAE",
    "UK",
    "USA",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]

today=str(datetime.datetime.now().date()) 
days_before = (date.today()-timedelta(days=50)).isoformat()

# deleting the data of 50 days ago
if path.exists(str(days_before)) :
     shutil.rmtree(str(days_before))


os.mkdir(today)
os.mkdir(today + '/v2')
os.mkdir(today + '/v3')
os.mkdir(today + '/v3/covid-19')
os.mkdir(today + '/v3/covid-19/vaccine')
os.mkdir(today + '/v3/covid-19/vaccine/coverage')
os.mkdir(today + '/v3/covid-19/vaccine/coverage/countries')
os.mkdir(today + '/v3/covid-19/historical')
os.mkdir(today + '/v3/covid-19/countries')

# https://disease.sh/v2/jhucsse.json || https://disease.sh/v2/jhucsse.json
r = requests.get('https://disease.sh/v2/jhucsse', allow_redirects=True)
open(today + '/v2/jhucsse.json', 'wb').write(r.content)

for country in country_list:
    # https://disease.sh/v3/covid-19/vaccine/coverage/countries/{country}.json || https://disease.sh/v3/covid-19/vaccine/coverage/countries/{country}?lastdays=all
    r2 = requests.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries/' + country + '?lastdays=all', allow_redirects=True)
    open(today + '/v3/covid-19/vaccine/coverage/countries/' + country + '.json', 'wb').write(r2.content)
    
    # https://disease.sh/v3/covid-19/historical/{country}.json || https://disease.sh/v3/covid-19/historical/{country}?lastdays=all
    r5 = requests.get('https://disease.sh/v3/covid-19/historical/' + country + '?lastdays=all', allow_redirects=True)   
    open(today + '/v3/covid-19/historical/' + country + '.json', 'wb').write(r5.content)

    # https://disease.sh/v3/covid-19/countries/{country}.json || https://disease.sh/v3/covid-19/countries/{country}
    r9 = requests.get('https://disease.sh/v3/covid-19/countries/' + country, allow_redirects=True)   
    open(today + '/v3/covid-19/countries/' + country + '.json', 'wb').write(r9.content)
  
# https://disease.sh/v3/covid-19/vaccine/coverage.json || https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30
r3 = requests.get('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30', allow_redirects=True)   
open(today + '/v3/covid-19/vaccine/coverage.json', 'wb').write(r3.content)

# https://disease.sh/v3/covid-19/historical.json || https://disease.sh/v3/covid-19/historical
r4 = requests.get('https://disease.sh/v3/covid-19/historical', allow_redirects=True)   
open(today + '/v3/covid-19/historical.json', 'wb').write(r4.content)

# https://disease.sh/v3/covid-19/historical/all.json || https://disease.sh/v3/covid-19/historical/all?lastdays=all
r6 = requests.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all', allow_redirects=True)   
open(today + '/v3/covid-19/historical/all.json', 'wb').write(r6.content)

# https://disease.sh/v3/covid-19/countries.json || https://disease.sh/v3/covid-19/countries
r7 = requests.get('https://disease.sh/v3/covid-19/countries', allow_redirects=True)   
open(today + '/v3/covid-19/countries.json', 'wb').write(r7.content)

# https://disease.sh/v3/covid-19/countries.json || https://disease.sh/v3/covid-19/countries
r8 = requests.get('https://disease.sh/v3/covid-19/countries', allow_redirects=True)   
open(today + '/v3/covid-19/countries.json', 'wb').write(r8.content)

# https://disease.sh/v3/covid-19/all.json || https://disease.sh/v3/covid-19/all
r10 = requests.get('https://disease.sh/v3/covid-19/all', allow_redirects=True)   
open(today + '/v3/covid-19/all.json', 'wb').write(r9.content)




