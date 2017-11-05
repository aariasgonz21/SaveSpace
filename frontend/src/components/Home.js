import React,{ Component } from 'react';
import '../style/home.css';

class Home extends Component{
	render(){
		return(
			<main role="main">
		      <section className="jumbotron text-center">
		        <div className="container">
		          <h1 className="jumbotron-heading">SaveSpace</h1>
		          <p className="lead text-muted">Something short and leading about the collection below—its contents, 
		          the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over 
		          it entirely.</p>
		          <p className="row">
			          <input className="form-control col-md-4" type="text" name="search" placeholder="Search Place"/>
			          <button className="btn default" type="button">Search</button>
		          </p>
		        </div>
		      </section>

			  <div className="row">
			    <div className="col-md-4">
		            <img className="icons" src={require('../images/open-book.png')}/>
		            <h2>Resources</h2>
		            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			    </div>
			    <div className="col-md-4">
		            <h2>Heading</h2>
		            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
		        </div>
			    <div className="col-md-4">
		            <h2>Heading</h2>
		            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
			    </div>
			  </div>
			</main>
		)
	};
};

export default Home;