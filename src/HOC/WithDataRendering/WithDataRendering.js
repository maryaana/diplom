import React, { useEffect } from 'react';
import { useLocation, useMatch, useParams } from 'react-router';

const WithDataRendering = (Component, content, pattern) => {
  let match = useMatch(pattern);

  const Internal = () => <Component data={content?.filter((c) => c.id === +match?.params.id)} />;

  return <Internal />;
};

export default WithDataRendering;
