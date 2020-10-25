import React from 'react';
import { Container } from 'components/Layout/Container';
import { Section } from 'components/Layout/Section';
import { TextField } from 'components/Form/TextField';
import { Button } from 'components/Button/Button';

function App() {
  return (
    <Container>
      <Section>
        boilerplate-react-typescript-tailwind
      </Section>
      <Section>
        <div className="mt-2">
          <TextField value="abc" />
        </div>
        <div className="mt-2">
          <Button>Send</Button>
        </div>
      </Section>
    </Container>
  );
}

export default App;
