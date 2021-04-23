import React from 'react';
import styles from './Style.module.css';
import ReactDOM from 'react-dom';



const Wiki = (props) => {
    return(
        
    <div className={styles.div}>
            <br />
            <h2>{props.title1}</h2>
            <iframe className={styles.youtube} src={props.video1} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{props.title2}</p>
            <br />
            <br />
            <h2>{props.title3}</h2>
            <iframe className={styles.youtube} src={props.video2} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <br />
            <br />
            <h3>{props.title4}</h3>
            <br />
            <ul>
                <li>{props.Symptoms1}</li>
                <li>{props.Symptoms2}</li>
                <li>{props.Symptoms3}</li>
                <li>{props.Symptoms4}</li>
                <li>{props.Symptoms5}</li>
                <li>{props.Symptoms6}</li>
                <li>{props.Symptoms7}</li>
                <li>{props.Symptoms8}</li>
                <li>{props.Symptoms9}</li>
                <li>{props.Symptoms10}</li>
                <li>{props.Symptoms11}</li>
            </ul>
            <br />
            <br />
            <br />
            <h3>{props.title5}</h3>
            <a href={props.Img1}> <img src={props.Img1} className={styles.img1} /></a>
            <br />
            <br />
            <br />
            <br />
            <h3>{props.title6}</h3>
            <br />
            <a href={props.Img2}> <img src={props.Img2} className={styles.img2} /></a>
            <br />
            <br />
            <br />
            <br />
            <h3>{props.title7}</h3>
            <br />
            {/* <div className={styles.banner}> */}
            <a href={props.Img3}> <img src ={props.Img3} className={styles.img3}/></a>
            <a href={props.Img4}> <img src={props.Img4} className={styles.img4}/></a>
            {/* </div> */}
            <br />
            <br />
            <br />
            <br />
            <h3>{props.title8}</h3>
            <br />
            <a href={props.Img5}> <img src={props.Img5} className={styles.img5} /></a>
            <br />
            <br />
            <br />
            <br />
            <h3>{props.title9}</h3>
            <br />
            <a href={props.Img6}><img src={props.Img6} className={styles.img6}/></a>
            <br />
            <br />
            <br />
            <br />
            <h3 style={{color : 'red'}}>{props.title10}</h3>
            <br />
            <a href={props.Img7}><img src={props.Img7} className={styles.img7}/></a>
            <br />
            <br />
            <br />
            <br />
            <h3>{props.title11}</h3>
            <br />
       
            <a href={props.Img8}> <img src={props.Img8} className={styles.img9}/></a>

            <a href={props.Img9}><img src={props.Img9} className={styles.img8}/></a>
            
            <a href={props.Img10}> <img src={props.Img10} className={styles.img8}/></a>
            
            <a href={props.Img11}><img src={props.Img11} className={styles.img8}/></a>
           </div>
        
    )
}
export default Wiki;