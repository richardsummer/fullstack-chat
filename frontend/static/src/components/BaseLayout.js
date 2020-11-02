import React , {Component} from 'react';
// import Row from 'react-bootstrap/Row';
class BaseLayout extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
      return (
        <main className="container-fluid body">
            {this.props.children}
        </main>
      );
    }
}
export default BaseLayout;
