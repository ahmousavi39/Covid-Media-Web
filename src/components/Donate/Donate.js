import React, { useState } from 'react';
import Styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import styles from './Donate.module.css'
import { useTranslation } from 'react-i18next';


export default function Donate(props) {
  const { t } = useTranslation();
  const Styles = Styled.div`
.btn{
    margin: 2px 10px 5px 0;
}

.register .btn{
    po
}
`
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  if(props.handleShow){
    setShow(true);
  }

  return (
    <Styles>

      <Modal show={show} onHide={handleClose} style={{ textAlign: 'center' }}>
        <Modal.Header closeButton>
          <Modal.Title> {t('Donate.2')}<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt='Covid Media' src={t('photo.1')} data-src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9jZG4uYnV5bWVhY29mZmVlLmNvbS91cGxvYWRzL3Byb2ZpbGVfcGljdHVyZXMvMjAyMC8wNi9jNGJmMzc2OGRjYjUzZTEyMjRjZmI5Yjk3MWQ0MTE4ZC5qcGc=&amp;size=270&amp;name=amirhossein2005" class="ctr-img img-centered r-wh-100 rounded-circle laazy white-3-border" />
          <br />
          <br />
          {t('Donate.3')}
          <br />
          <br />
          <div className={styles.btncontainer}>
            <a title="Support me" className={styles.kofibutton} style={{ backgroundColor: '#e02828' }} href="https://buymeacoffee.com/amirhossein2005" rel="noopener noreferrer" target="_blank">
              <span className={styles.kofitext} style={{ color: "white" }}  >
                <img alt='Covid Media' src={t('cafee.1')} className={styles.kofiimg} />
                {t('Donate.4')}
              </span>
            </a>
          </div>
          <br />
          {t('Donate.5')}
          <br />
          <div className={styles.btncontainer} style={{ marginTop: '5px' }} >
            <a title="Support me" className={styles.kofibutton} style={{ backgroundColor: 'white' }} href="https://www.paypal.com/donate/?token=56dkEIbAPXGkOBuWU9G3ElVIw8AQcH_C1AeYmd1YuglzMiRS_WadGwhxV1Tf-1KDYnvqsG&country.x=GR&locale.x=GR" rel="noopener noreferrer" target="_blank">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="G2VKLWT7VA744" />
                <input type="image" src={t('paypal.1')} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt='Covid Media'  border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
              </form>

            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Styles>
  )
}