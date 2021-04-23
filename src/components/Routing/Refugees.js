// import React, { Component, useState, useEffect } from 'react';
// import styles from './Style.module.css';
// import { useTranslation } from 'react-i18next';
// import ReactHtmlParser from 'react-html-parser';
// import { use } from 'i18next';
// const axios = require('axios');



// export default function Refugees() {
//     const [data , setData] = useState([]);

//   var first_path = window.location.pathname;

//   first_path.indexOf(1);

//   first_path.toLowerCase();

//   first_path = first_path.split("/")[1];

//     useEffect(() => {
//         axios.get('http://localhost:8000/refugees/news/get', { 'headers': { 'key': 'get_key' } })
//           .then(response => {
//             var News = response.data;
//             setData(News);
//           });
    
//       }, []);

//       return (
//           <>
//           {data.map(e => {
//           console.log(e);
//           if(first_path == e.Language.toLowerCase()){
//           return (
//             <div class="card" style={{margin : '5%'}}>
//             <div class="card-body">
//           {ReactHtmlParser(e.News)}
//           <br />
//           <small>{e.Date}</small>
//           <br />
//           <small>{e.Language}</small>
//         </div> 
//         </div>
//           )
//           }
//           })} 
//           </>
//       );
      
// }