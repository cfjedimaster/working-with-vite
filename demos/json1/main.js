import './style.css'

import data from './data.json'

console.log(data);

document.querySelector('#app').innerHTML = `
<pre>
  ${JSON.stringify(data,null,'\t')}
</pre>
`