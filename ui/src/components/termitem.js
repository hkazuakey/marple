import React, { PropTypes } from 'react';
import { Nav, NavItem, FormGroup, FormControl, Radio, Form, Grid, Row, Col, Button } from 'react-bootstrap';
import Postings from './postings';

class TermItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostings: false
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.handlePostingsClick = this.handlePostingsClick.bind(this);
  }

  componentWillReceiveProps(newprops) {
    this.setState({ displayPostings: false });
  }

  handlePostingsClick() {
    var display = !this.state.displayPostings;
    this.setState({ displayPostings: display });
  }

  render() {
    const s = this.state;
    const p = this.props;

    return <Row>
      <Col md={2}><Nav activeKey={p.term}><NavItem eventKey={p.term} onSelect={ e => this.handlePostingsClick() }>{p.term}</NavItem></Nav></Col>
      <Col md={8}><Postings segment={p.segment} field={p.field} term={p.term} displayPostings={s.displayPostings} showAlert={p.showAlert} /></Col>
      </Row>;
  }
}

TermItem.propTypes = {
  segment: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  field: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired
}

export default TermItem;
