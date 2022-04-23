import React, { Component } from 'react';
const resumePath = 'pdf/dmitrykutin-resume.pdf'


class Resume extends Component {
    render() {
        return (
            <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
                <object data={resumePath} type="application/pdf" width="100%" height="100%">
                    <p>Seems the image isn't loading, try following the <a href={resumePath}>link to my resume.</a> </p>
                </object>
            </div>
        )
    }
}

export default Resume;