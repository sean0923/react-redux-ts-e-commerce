import React from 'react';

import { firebase} from '../../../firebase/firebase'



function TestPage() {
  const handleClick = () => {
    firebase.functions().
  }
  return (
    <div>
      <div>TestPage</div>
      <button>Testing Cloud function</button>
    </div>
  );
}

export { TestPage };
