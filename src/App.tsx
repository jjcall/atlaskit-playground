import React from 'react';
import Button from '@atlaskit/button/new';
import { Box, xcss } from '@atlaskit/primitives';

const containerStyles = xcss({
  padding: 'space.200',
  backgroundColor: 'elevation.surface',
  borderRadius: 'border.radius.200',
});

export default function App() {
  return (
    <Box xcss={containerStyles}>
      <h1>AtlasKit Local Playground</h1>
      <Button appearance="primary">Click me</Button>
    </Box>
  );
}