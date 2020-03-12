import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var githubImage = 'images/github.svg';
        var linkImage = 'images/link.svg';
        return <div key={projects.title} className="columns portfolio-item">
            {/*Image with Hover*/}
            <div className="portfolio-item-image" >
                <div className="item-wrap">
                    <img alt={projects.title} src={projectImage} />
                    <div className="overlay">
                        <div className="github-icon">
                            <a href={projects.repo}>
                                <img src={githubImage} className="icons" alt="GitHub"/>
                            </a>
                        </div>
                        <div className="hyperlink-icon">
                            <a href={projects.url}>
                                <img src={linkImage} className="icons" alt="Live Demo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*Text*/}
            <div className="portfolio-item-meta">
                   <h5>{projects.title}</h5><br/>
                <p><b>Description</b><br/>{projects.description}</p><br/>
                   <p><b>My Contribution</b><br/>{projects.contribution}</p>
            </div>
          </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
