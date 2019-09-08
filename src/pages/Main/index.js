import React, { Component } from 'react';

import Header from '../../components/molecules/Header';
import HeaderForm from '../../components/molecules/HeaderForm';
import Form from '../../components/organisms/Form';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <HeaderForm />
        <Form />
      </>
    );
  }
}
