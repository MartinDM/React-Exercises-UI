import React from 'react';
import Loading from './Loading'

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Loading.args = {
};

export default {
  component: Loading,
  title: 'Loading',
};