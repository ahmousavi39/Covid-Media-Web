import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


const Contact = (props) => {
    const { t } = useTranslation();

    const mystyle = {
        marginTop: "3%",
        marginRight : "auto",
        marginLeft : "auto",
        position : "unset"
          };

  
   
    return (
        <div style={mystyle}>

<form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />

     <section class="container" >




       <div class="row">


           <div class="col-lg-5 mb-4" style={mystyle} >


               <div class="card border-primary rounded-0" style={{position : "unset"}}>


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
                               <input type="text" class="form-control" id="inlineFormInputGroupUsername" name="name" placeholder={props.a3} />
                           </div>
                       </div>


                       <div class="form-group">
                           <label>{t('Contactus.4')}</label>
                           <div class="input-group mb-2 mb-sm-0">
                               <div class="input-group-addon bg-light"><i /></div>
                               <input type="email" class="form-control" id="inlineFormInputGroupUsername" name="email" placeholder={props.a4}  />
                           </div>
                       </div>


                       <label>{t('Contactus.5')}</label>
                       <select class="browser-default custom-select mb-4" name="role[]">
                           <option value="" disabled>{t('Contactus.6')}</option>
                           <option value="feedback" selected>{t('Contactus.7')}</option>
                           <option value="bug">{t('Contactus.8')}</option>
                           <option value="feature">{t('Contactus.9')}</option>
                       </select>


                       <div class="form-group">
                           <label>{t('Contactus.10')}</label>
                           <div class="input-group mb-2 mb-sm-0">
                               <div class="input-group-addon bg-light"><i class="fa fa-pencil text-primary"></i></div>
                               <textarea class="form-control" name='message' ></textarea>
                           </div>
                       </div> 
                       <button class="btn btn-primary btn-block rounded-0 py-2">{t('Contactus.11')}</button>
                                

                             {/*////////////////// CONTACT QUICK //////////////////////*/}
                                 
                           <br />

                       <div class="text-center">       
                              
                           <a style={{color: "black"}} type="button" class="btn-floating btn-fb btn-sm" target="_blank" href="https://www.facebook.com/amirhoseyn.mosavi.1/">
                               <i class="fab fa-facebook-f"></i>
                           </a>
                           <a style={{color: "black"}} type="button" class="btn-floating btn-tw btn-sm" target="_blank" href="https://www.instagram.com/mr_code_09/?hl=el">
                               <i class="fab fa-instagram"></i>
                           </a>
                           <a style={{color: "black"}} type="button" class="btn-floating btn-li btn-sm" target="_blank" href="https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/">
                               <i class="fab fa-linkedin-in"></i>
                           </a>  
                                        <a style={{color: "black"}} type="button" class="btn-floating btn-git btn-sm" target="_blank" href="https://github.com/mousaviamirhossein">
                               <i class="fab fa-github"></i>
                           </a>
                           <a style={{color: "black"}} type="button" class="btn-floating btn-git btn-sm" href="#email">
                               <i class="fa fa-envelope "></i>
                           </a>
                           <a style={{color: "black"}} type="button" class="btn-floating btn-git btn-sm" href="#phone">
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