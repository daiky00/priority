import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = (props) => {
  return (
    <header className={`${styles.header}`}>
      <Grid>
        <Row center="xs">
         <Col xs={12}>
            <Logo />
          </Col>
        </Row>
      </Grid>
    </header>
  )
}

export default Header;