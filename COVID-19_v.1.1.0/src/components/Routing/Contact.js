import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Style.module.css"


const Contact = (props) => {
    const mystyle = {
        marginTop: "3%",
        marginRight : "auto",
        marginLeft : "auto"
      };
   
    return (
        <div style={mystyle}>



            {/*////////////////// CONTACT //////////////////////*/}


            <section class="container">

            <form name="contact" method="POST" data-netlify="true">



                <div class="row">


                    <div class="col-lg-5 mb-4" style={mystyle}>


                        <div class="card border-primary rounded-0">


                            <div class="card-header p-0">
                                <div class="bg-primary text-white text-center py-2">
                                    <h3><i class="fa fa-envelope"></i> {props.a1} </h3>
                                    <p class="m-0">{props.a2}</p>
                                </div>
                            </div>


                            <div class="card-body p-3">


                                <div class="form-group">
                                    <label>{props.a3}</label>
                                    <div class="input-group">
                                        <div class="input-group-addon bg-light"><i /></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder={props.a3} />
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>{props.a4}</label>
                                    <div class="input-group mb-2 mb-sm-0">
                                        <div class="input-group-addon bg-light"><i /></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder={props.a4} />
                                    </div>
                                </div>


                                <label>{props.a5}</label>
                                <select class="browser-default custom-select mb-4">
                                    <option value="" disabled>{props.a6}</option>
                                    <option value="1" selected>{props.a7}</option>
                                    <option value="2">{props.a8}</option>
                                    <option value="3">{props.a9}</option>
                                </select>


                                <div class="form-group">
                                    <label>{props.a10}</label>
                                    <div class="input-group mb-2 mb-sm-0">
                                        <div class="input-group-addon bg-light"><i class="fa fa-pencil text-primary"></i></div>
                                        <textarea class="form-control"></textarea>
                                    </div>
                                </div>
                                    <button class="btn btn-primary btn-block rounded-0 py-2">{props.a11}</button>



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

</form>
            </section>




        </div>

    )
}
export default Contact;
//  <div style={{ marginTop: '7%' },{display:"flex"}}>



// <a style={{   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
//         <i class="fa fa-map-marker"></i></a>
//     <p>Athens,Greece</p></a>





// <a style={ {   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
//         <i class="fa fa-phone"></i></a>
//     <p>+30 694 8561474</p></a>


// <a style={{   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block" >
//         <i class="fa fa-envelope"></i></a>
//     <p>mosaviamirhoseyn9@gmail.com</p></a>
//     <pre>            

//     </pre>


// <a target="_blank" href="https://www.linkedin.com/in/amirhossein-mousavi-7583111a6/" style={ {   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
//         <i class="fab fa-linkedin mdb-gallery-view-icon"></i></a>

//     <p>Linkedin</p></a>


// <a target="_blank" href="https://www.facebook.com/amirhoseyn.mosavi.1/" style={ {   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
//         <i class="fab fa-facebook-f" /></a>
//     <p>Facebook</p></a>



// <a target="_blank" href="https://www.instagram.com/mr_code_09/?hl=el" style={ {   verticalAlign: 'middle' }}>
//     <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
//         <i class="fab fa-instagram mdb-gallery-view-icon"></i></a>
//     <p>Instagram</p></a>


// </div>