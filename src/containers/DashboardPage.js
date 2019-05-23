import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-flexbox-grid';
import { fetchRepos } from '../actions/repoActions';
import { fetchIssues } from '../actions/issueActions';
import Title from '../components/Title/Title';
import Card from '../components/Card/Card';
import Divider from '../components/Divider/Divider';
import Button from '../components/Button/Button';
import Avatar from '../components/Avatar/Avatar';
import Key from '../components/Key/Key';
import moment from 'moment';
import 'moment/min/locales';


class DashboardPage extends Component {

  constructor() {
    super();
    this.handleFetchIssues = this.handleFetchIssues.bind(this);
    this.handleLayout = this.handleLayout.bind(this);
  }
  componentDidMount() {
    const { token } = this.props.match.params;
    this.props.fetchRepos(token);
  }

  handleFetchIssues(e, repoName) {
    const { token } = this.props.match.params;
    this.props.fetchIssues(token, repoName)
  }

  handleLayout(issues) {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
    if(issues) {
      return 6;
    } else {
      return 12;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Col xs={12}>
          <Title>Dashboard</Title>
        </Col>
        <Col xs={12} md={this.handleLayout(this.props.issues)}>
          <Card>
            {this.props.repos && this.props.repos.length ? this.props.repos.map((item, index) => (
              <React.Fragment key={index}>
                <Title variant="h2">{item.full_name}</Title>
                <Button onClick={(e) => this.handleFetchIssues(e,item.full_name)} color="primary">See Issues</Button>
                <Key label="Open Issues:" value={item.open_issues} />
                <Divider />
              </React.Fragment>
            )) : <Title variant="h2">No Repos Available</Title>
            }
          </Card>
        </Col>
        { this.props.issues && <Col xs={12} md={this.handleLayout(this.props.issues)}>
          <Card>
            { this.props.issues.length ? this.props.issues.map((item, index) => (
                <React.Fragment key={index}>
                  <Title variant="h3">{item.title}</Title>
                  <Avatar image={item.user.avatar_url} size="xs" alt="avatar"/>
                  <Key label="Created At:" value={moment(item.created_at).format('MM/DD/YYYY')} />
                  <Key label="Updated At:" value={moment(item.updated_at).fromNow()} />
                  <Divider />
                </React.Fragment>
              )) : <Title variant="h2">No Issues Available</Title>
            }
            </Card>
        </Col> }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  repos: state.repos.items,
  issues: state.issues.items
})
export default connect(mapStateToProps, { fetchRepos, fetchIssues })(DashboardPage)