import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


const Contact = (props) => {
    const { t } = useTranslation();


    const mystyle = {
        marginTop: "3%",
        marginRight: "auto",
        marginLeft: "auto",
        position: "unset"
    };

    function sendEmail(e) {
        e.preventDefault();
        let usernameInput = document.getElementById('inlineFormInputGroupUsername').value.length > 2;
        let emailInput = document.getElementById('inlineFormInputGroupEmail').value.length > 3;
        let messageInput = document.getElementById('inlineFormInputGroupMessage').value.length > 5;
        
        if(usernameInput && emailInput && messageInput){
        emailjs.sendForm('service_7juc9mi', 'template_h7lpnp5', e.target, 'user_nz0Tn3wyTUAA5mHpSe6hw')
          .then((result) => {
              document.querySelector(".contact-form").style.display = 'none';
              document.getElementById('contact-container').innerHTML = '<div class="card text-white bg-primary mb-3" style="max-width: 18rem;margin-right: auto; margin-left: auto; text-align: center; opacity: .9"><div class="card-header">Successful!</div><div class="card-body"><h5 class="card-title">Thank you!</h5><p class="card-text" style="color: black;">If necessary, we will answer you soon!<p style="text-align: right;"><a onclick="location.reload();" style="color: white">Back<<</a></p></p></div></div>';
          }, (error) => {
            alert(error);
          });
        }else{
            alert(!usernameInput ? 'Please enter a valid name' : !emailInput ? 'Please enter a valid email' : !messageInput ? 'Youre message should be longer than 5 charectors' : '')
        }
      }

    return (
        <div id="contact-container" style={mystyle}>

            <form name="contact-form" className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
                <section class="container" >
                    <div class="row">

                        <div class="col-lg-5 mb-4" style={mystyle} >

                            <div class="card border-primary rounded-0" style={{ position: "unset" }}>
                                <div class="card-header p-0">
                                    <div class="bg-primary text-white text-center py-2">
                                        <h3><i class="fa fa-envelope"></i>{t('Contactus.1')} </h3>
                                        <p class="m-0">{t('Contactus.2')}</p>
                                    </div>
                                </div>

                                <div class="card-body p-3">
                                    <div class="form-group">
                                        <label>{t('Contactus.3')}</label>
                                        <div class="input-group">
                                            <div class="input-group-addon bg-light"><i /></div>
                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" name="user_name" placeholder={props.a3} />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>{t('Contactus.4')}</label>
                                        <div class="input-group mb-2 mb-sm-0">
                                            <div class="input-group-addon bg-light"><i /></div>
                                            <input type="email" class="form-control" id="inlineFormInputGroupEmail" name="user_email" placeholder={props.a4} />
                                        </div>
                                    </div>


                                    {/* <label>{t('Contactus.5')}</label>
                                    <select class="browser-default custom-select mb-4" name="role[]">
                                        <option value="" disabled>{t('Contactus.6')}</option>
                                        <option value="feedback" selected>{t('Contactus.7')}</option>
                                        <option value="bug">{t('Contactus.8')}</option>
                                        <option value="feature">{t('Contactus.9')}</option>
                                    </select> */}


                                    <div class="form-group">
                                        <label>{t('Contactus.10')}</label>
                                        <div class="input-group mb-2 mb-sm-0">
                                            <div class="input-group-addon bg-light"><i class="fa fa-pencil text-primary"></i></div>
                                            <textarea id="inlineFormInputGroupMessage" class="form-control" name='message' ></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block rounded-0 py-2">{t('Contactus.11')}</button>

                                    {/*////////////////// CONTACT QUICK //////////////////////*/}

                                    <br />

                                    <div class="text-center">

                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-fb btn-sm" target="_blank" href="https://www.facebook.com/m.amirhossein2005">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-tw btn-sm" target="_blank" href="https://www.instagram.com/m.amirhossein2005">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-li btn-sm" target="_blank" href="https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-git btn-sm" target="_blank" href="https://github.com/mousaviamirhossein">
                                            <i class="fab fa-github"></i>
                                        </a>
                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-git btn-sm" href="#email">
                                            <i class="fa fa-envelope "></i>
                                        </a>
                                        <a style={{ color: "black" }} type="button" class="btn-floating btn-git btn-sm" href="#phone">
                                            <i class="fa fa-phone"></i>
                                        </a>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
            </form>

        </div>

    )
}
export default Contact;