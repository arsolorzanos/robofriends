import React,{Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasErrors: false,
		}
	}

	componentDidCatch(error, info){
		this.setState({hasErrors:true});
	}

	render(){
		if(this.state.hasErrors){
			return <h1>Opsss. Thas is no good!</h1>
		}else{
			return this.props.children;
		}
	}
}

export default ErrorBoundry;