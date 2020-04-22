import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      // TODO: add resume download.
    }

    return (
      <section id="about">
      <div className="row">
         <div className="centered nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                   <p>
                       <span>{phone}</span><br />
                       <span>{email}</span>
                   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a className="button" id="disabled"><i className="fa fa-download"></i>Download Resume (To be added)</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
