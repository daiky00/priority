import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { fetchRepos } from '../actions/repoActions';

class AccessPage extends Component {

  state = {
    token: ''
  }
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRepos(this.state.token);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Col sm={12}>
          <form onSubmit={this.handleSubmit} >
            <Input 
              type="text" 
              name="token" 
              placeholder="Enter Your GitHub Access Token" 
              title="Your GitHub Access Token"
              size="md"
              required={true}
              handleChange={this.handleChange}
              error={this.props.message}
            />
            <Button type="submit" color="primary">Submit</Button>
          </form>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  message: state.repos.message
})
export default connect(mapStateToProps, { fetchRepos })(AccessPage)