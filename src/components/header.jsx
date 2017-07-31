import React from 'react'

class Header extends React.Component{
    render(){

        var divStyle = {
            padding: '20px',
            border: '1px solid #303030',
            display: 'block',
            width: '400px',
            'border-radius': '6px'
        }

        return(
            <div>
                <div>
                    <h1>Huge header</h1>
                    <h2>React Application</h2>

                    <div style = {divStyle}>
                        Hello Andrej!!!
                    <p>Welcome to the react tutorial!!!</p>
                        <p>As you can see the content op page is changing<br></br>
                            dinamicaly on fly as you saving updates made in editor.</p>
                        <p>It is <b>awesome!!!!!!!!!!!</b></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;