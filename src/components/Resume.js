import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {this.props.data && this.props.data.education.map(function (education) {
                  return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree}</p>
                    <p>{education.description}</p></div>
                })}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {this.props.data && this.props.data.work.map(function (work, index) {
              return <div key={`${work.company}-${index}`}>
                <h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <strong>{work.description}</strong>
                <p>{work.contribution}</p>
              </div>
            })}
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
