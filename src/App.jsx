import React from 'react';

//import Footer from '/src/components/footer'

var divStyle = {
    padding: '20px',
    border: '1px solid #303030',
    display: 'block',
    width: '400px',
    borderRadius: '6px'
}

var myStyle = {
    color: 'red'
}

var tableStyle = {
    border: '1px solid #090909',
    padding: '10px',
    width: '200px',
    txtAlign: {
        textAlign: 'center'
    }
}

class App extends React.Component {

    constructor(){
        super();

        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Andrej",
                    "age":20
                },
                {
                    "id":2,
                    "name":"Tatjana",
                    "age":30
                },
                {
                    "id":3,
                    "name":"Chisty",
                    "age":40
                }
            ],
            author: "by Andrej Lavrinovic"
        }
    }

    render() {

        return (

            <div>
                <Header authorProp = {this.state.author}/>
                <Content/>
                <div className = 'table-container container' style = {tableStyle}>
                    <table>
                        <thead><tr><th>#</th><th>name</th><th>number</th></tr></thead>
                        <tbody>
                            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div className='header-container container'>
                <h1>Huge header</h1>
                <h2>React Application</h2><h5>{this.props.authorProp}</h5>

                <div style = {divStyle}>
                    Hello Andrej!!!
                <p data-myattribute = "somevalue">Welcome to the react tutorial!!!</p>
                    <p>As you can see the content op page is changing<br></br>
                        dinamicaly on fly as you saving updates made in editor.</p>
                    <p>It is <b>awesome!!!!!!!!!!!</b></p>
                </div>

            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <div className='content-container container'>
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

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className='footer-container container' style = {myStyle}><h4>Thank you, Good by</h4></div>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td style = {tableStyle.txtAlign}>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;