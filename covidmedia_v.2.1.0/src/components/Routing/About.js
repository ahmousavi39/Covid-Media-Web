import React from 'react';
import styles from './Style.module.css';
import { useTranslation } from 'react-i18next';

const About = (props) => {
  const { t } = useTranslation();
  const icon = {
    textAlign: 'center',
    marginTop: '5%'
  }
  const who = {
    textAlign: 'center',
    marginTop: '3%'
  }

  return (
    <div>
      <div class="card card-cascade wider" id={styles.cardAbout}>
        <h1 style={icon}>
          <i class="fa fa-address-card"> {t('Aboutus.1')} </i>
          <br />
          <hr />
        </h1>
        <h3 style={who}>
          <svg class="bi bi-question-circle-fill" width="1.5em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
          </svg>
           {t('Aboutus.2')}
          </h3>
        <br />
        <br />
        <p style={{ padding: '5%' }}>{t('Aboutus.3.1')} <strong> {t('Aboutus.3.2')}</strong> <br />
        {t('Aboutus.3.3')} <strong>{t('Aboutus.3.4')}</strong>
        <br />
        {t('Aboutus.3.5')} <a target="_blank" href="https://socialhackersacademy.org/"><strong style={{ color: 'black' }}> {t('Aboutus.3.6')} </strong></a>

          <br />
          <br />
          <br />
          <br />
           {t('Aboutus.4')} 
          <ol>
            <br />
            <li>{t('Aboutus.5.1')}</li>
            <li>{t('Aboutus.5.2')}</li>
            <li>{t('Aboutus.5.3')}</li>
            <li>{t('Aboutus.5.4')}</li>
            <li>{t('Aboutus.5.5')}</li>
          </ol>
          <br />
          <br />
          <br />
           {t('Aboutus.6.1')} <strong> {t('Aboutus.6.2')} </strong> {t('Aboutus.6.3')}
            <br />
          <br />

        </p>
        <hr />  <br />
        <h3 style={who}>
          <svg class="bi bi-question-circle-fill" width="1.5em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
          </svg>
          {t('Aboutus.7')}
          </h3>
        <br />
        <br />
        <p style={{ padding: '5%' }}>{ t('Aboutus.8.1')}
          <strong> {t('Aboutus.8.2')} </strong><br />
           {t('Aboutus.8.3')} 
            <br />
          <br />
          <br />
          <br />
          <strong> {t('Aboutus.9')} </strong>
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  )
}
export default About;