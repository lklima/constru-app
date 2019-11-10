import React from 'react';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings(['Warning: Async', 'Deprecation warning:']);

const App = () => (
  <Routes />
);

export default App;
