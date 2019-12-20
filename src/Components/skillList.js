import React from "react"

class Skills extends React.Component {
    render() {
        return (
            <div className='skills skills-list'>
                <h1>Skills:</h1>
                <section>
                    <ul>
                        <li>React</li>
                        <li>React-Redux</li>
                        <li>Redux-Saga</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript & jQuery</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                    </ul>
                </section>
                <h2>Testing:</h2>
                <ul>
                <li>Jest</li>
                <li>Enzyme</li>
                </ul>
            </div>
        )
    }
    
}

export default Skills;
