import * as iconNames from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { TextInput } from '.';
import { Document, TextSection, VariationsTable, handleEvent, createPropsFromKnobs } from '../../helpers/storybook';


storiesOf('Elements|TextInput', module)
  .lokiSkip('TextInput', () => <Document>
    <TextSection>
      <h1>TextInput</h1>
      <p>
      An interactive control to accept text data from the user.
      </p>
    </TextSection>
    <VariationsTable
      component={TextInput}
      common={{
        value: '',
        onChange: () => {},
      }}
      xAxis={{
        default: {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': { icon: 'at', value: 'Long text as value' },
      }}
      yAxis={{
        default: {},
        hover: { className: 'hover' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
        hidden: { hidden: true },
        error: { error: true },
        'error + hover': { error: true, className: 'hover' },
        'error + focus': { error: true, className: 'focus' },
        multiline: { rows: 3 },
        'multiline / hover': { rows: 3, className: 'hover' },
        'multiline / focus': { rows: 3, className: 'focus' },
        'multiline / disabled': { rows: 3, disabled: true },
        'multiline / hidden': { rows: 3, hidden: true },
        'multiline / error': { rows: 3, error: true },
        'multiline / error + hover': { error: true, className: 'hover' },
        'multiline / error + focus': { error: true, className: 'focus' },
      }}
    />
  </Document>);


const props = createPropsFromKnobs({
  value: '',
  placeholder: '',
  disabled: false,
  hidden: false,
  error: false,
  rows: 1,
  icon: ['', iconNames],
  onChange: handleEvent('change'),
});

storiesOf('Elements|TextInput', module)
  .addDecorator(jsxDecorator)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['spec'] })
  .add('default', () => <TextInput {...props()} />)
  .add('with placeholder', () => <TextInput {...props({ placeholder: 'Placeholder' })} />)
  .add('with value', () => <TextInput {...props({ value: 'Value' })} />)
  .add('disabled', () => <TextInput {...props({ disabled: true })} />)
  .add('hidden', () => <TextInput {...props({ hidden: true })} />)
  .add('with error', () => <TextInput {...props({ error: true })} />)
  .add('with icon', () => <TextInput {...props({ icon: ['mail', iconNames] })} />)
  .add('multiline', () => <TextInput {...props({ rows: 3 })} />)
  .add('uncontrolled', () => <TextInput {...props({ value: undefined, onChange: undefined })} />);