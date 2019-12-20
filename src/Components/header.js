import React from "react"
import Skills from './skillList';
class Header extends React.Component {
    render() {
        return (
            <div>
            <div className='header'>
            <h1>Karen Medina</h1>
            <h2>FULL STACK DEVELOPER</h2>
                    <div className='misc'>
                        <span>Official Site Coming Soon!</span>
                    </div>
                    
                    
            </div>
            <Skills />
                <section className='bottom-section'>
                    <h3>
                        <a href="https://squaresend.com/mailto:4guz7j1n">
                            Contact Me
            </a>
                    </h3>
                    <footer>Please Visit:<a href="https://github.com/KMedinaTheDev">GitHub Profile</a>to view my latest projects</footer>
                </section>
            </div>
        );
    }
}

export default Header;