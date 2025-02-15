import { TextInput } from '../TextInput';

const codeTemplate = (props: string) => `<TextInput
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: TextInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Your name' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Full name',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
