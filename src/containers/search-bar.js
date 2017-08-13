import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearhBar extends Component {
  constructor(props){
    super(props);

    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
    onInputChange(e){
      this.setState({term:e.target.value})
    }
    onFormSubmit(e){
      e.preventDefault();
      this.props.fetchWeather(this.state.term)
      this.setState({term:''})
    }

    render() {
        return (
          <div>
            <form onSubmit={this.onFormSubmit}
              className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearhBar);
