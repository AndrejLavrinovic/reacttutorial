import React from 'react';

class App extends React.Component {
    render() {

        var divStyle = {
            padding: '20px',
            border: '1px solid #303030',
            display: 'block',
            width: '400px',
            'border-radius': '6px'
        }

        return (

            <div>
                <h2>React Application</h2>
                <div style = {divStyle}>
                    Hello Andrej!!!
                <p>Welcome to the react tutorial!!!</p>
                    <p>As you can see the content op page is changing<br></br>
                        dinamicaly on fly as you saving updates made in editor.</p>
                    <p>It is <b>awesome!!!!!!!!!!!</b></p>
                </div>
                <div>
                    <h3>JavaScript insertions</h3>
                    <p>JavaScript code can be inserted into context.<br></br>
                        It need to be wrapped by curly brases.<br></br>
                        For example: <i>23 + 56 = &#123; 23 + 56 &#125;</i> will give &#x25BA;<br></br>
                        <b>23 + 56 = {23 + 56}</b></p>
                </div>
            </div>
        );
    }
}

export default App;