const packageJson = require('../package.json');
import setRootPixel from '@arco-design/mobile-react/tools/flexible';

import './style/index.less'
import '@arco-design/mobile-react/esm/style';

console.log('version:', packageJson.version);

setRootPixel(37.5);