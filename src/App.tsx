/** @jsxImportSource @emotion/react */
import React from 'react';
import { AtlassianLogo } from '@atlaskit/logo';
import { Stack, Box, Text, Inline } from '@atlaskit/primitives';
import Button from '@atlaskit/button';
import Heading from '@atlaskit/heading';

const App = () => {
  return (
    <Box style={{
      minHeight: '100vh',
      backgroundColor: 'var(--ds-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box
        style={{
          maxWidth: '567px',
          backgroundColor: 'var(--ds-surface-sunken)',
          borderRadius: 'var(--ds-border-radius-200)',
          padding: 'var(--ds-space-600)'
        }}
      >
        <Stack space="space.200">
          <Box>
            <AtlassianLogo size="medium" appearance="brand" />
          </Box>

          <Heading
            as="h1"
            size="xxlarge"
          >
            Atlaskit Playground
          </Heading>

          <Box>
            <Text as="p">
              Start building your Atlassian prototype here. This minimal boilerplate
              includes Atlaskit components and design tokens.
            </Text>
          </Box>

          <Box style={{ paddingLeft: 'var(--ds-space-0)' }}>
            <Box style={{ fontWeight: 'bold', marginBottom: 'var(--ds-space-075)', marginTop: 'var(--ds-space-200)' }}>
              <Text as="p">
                <strong>Optimized for rapid prototyping:</strong>
              </Text>
            </Box>
            <ul style={{
              marginBottom: 'var(--ds-space-300)',
              paddingLeft: 'var(--ds-space-300)',
              color: 'var(--ds-text)'
            }}>
              <li>
                <Text as="span">Preconfigured Atlassian design tokens</Text>
              </li>
              <li>
                <Text as="span">Essential Atlaskit primitives for layout (Box, Stack, Inline)</Text>
              </li>
              <li>
                <Text as="span">Responsive design patterns out of the box</Text>
              </li>
              <li>
                <Text as="span">Fast dev server with Vite</Text>
              </li>
              <li>
                <Text as="span">TypeScript for improved developer experience</Text>
              </li>
            </ul>
          </Box>

          <Button
            appearance="primary"
            onClick={() => window.open('https://atlassian.design/components', '_blank')}
          >
            Explore Components
          </Button>

          <Box style={{
              marginTop: 'var(--ds-space-300)',
              textAlign: 'center',
              fontSize: 'var(--ds-font-size-075)',
              color: 'var(--ds-text-subtle)'
            }}>
            <Text as="p">
              Made for Atlassians with 💙 by{' '}
              <a
                href="https://www.linkedin.com/in/jasoncalleiro/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--ds-link)', textDecoration: 'none' }}
              >
                Jason Calleiro
              </a>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default App;