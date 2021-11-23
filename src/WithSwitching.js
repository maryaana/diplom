import React, { useEffect, useState } from 'react';

function WithSwitching(Component, trigger, defaultValue = false, props) {
  const [state, setState] = useState(defaultValue);
  console.log(props);
  function Switcher() {
    function handleNewState() {
      console.log(state);
      setState(!state);
    }

    useEffect(() => {
      trigger?.current?.addEventListener('click', handleNewState);

      return () => trigger?.current?.removeEventListener('click', handleNewState);
    }, [trigger]);

    return state && <Component {...props} onClose={handleNewState} />;
  }

  return <Switcher />;
}

export default WithSwitching;
