import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@material-ui/core';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button variant="contained" color="primary">
      click me
    </Button>
  ));
