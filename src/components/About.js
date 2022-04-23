import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
   render() {

      if (this.props.data) {
         var bio = this.props.data.bio;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
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
                           <a href={`tel:${phone}`}>{phone}</a><br />
                           <a href={`mailto:${email}`}>{email}</a>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <Link className="button" to="/resume"><i className="fa fa-download"></i>Download/View Resume</Link>
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
