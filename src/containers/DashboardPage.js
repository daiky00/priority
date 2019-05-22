import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/repoActions';
import Title from '../components/Title/Title';
import Card from '../components/Card/Card';
import Divider from '../components/Divider/Divider';
import Button from '../components/Button/Button';
import { Col } from 'react-flexbox-grid';

class DashboardPage extends Component {

  componentDidMount() {
    const { token } = this.props.match.params;
    this.props.fetchRepos(token);
  }

  render() {
    return (
      <React.Fragment>
        <Col xs={12}>
          <Title>Dashboard</Title>
        </Col>
        <Col xs={12}>
          <Card>
            {this.props.repos && this.props.repos.length ? this.props.repos.map((item, index) => (
              <React.Fragment key={index}>
                <Title variant="h2">{item.full_name}</Title>
                <Button color="primary">See Issues</Button>
                <span>Open Issues: {item.open_issues}</span>
                <Divider />
              </React.Fragment>
            )) : <Title variant="h2">No Repos Available</Title>
            }
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  repos: state.repos.items
})
export default connect(mapStateToProps, { fetchRepos })(DashboardPage)