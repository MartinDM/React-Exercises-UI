import React from 'react';
import Loading from './Loading'

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Loading.args = {
  success: true
};

export const API_Failed = Template.bind({});
Loading.args = {
  success: false
};

export default {
  component: Loading,
  title: 'Loading',
};
