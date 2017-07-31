import React from 'react'

class Footer extends React.Component{
    render(){

        myStyle = {
            color: 'red'
        }

        return(
            <div style = {myStyle}>
                <h4>Thank you, Good by</h4>
            </div>
        );
    }
}

export default Footer;