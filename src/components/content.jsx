import React from 'react'

class Content extends React.Component{
    render(){
        return(
            <div>
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