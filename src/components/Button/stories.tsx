import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { ButtonProps } from '.';
import { FaPaw } from 'react-icons/fa';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

// -- defining default values
Default.args = {
  children: 'Anything'
};

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />;

withIcon.args = {
  children: 'Start here',
  icon: <FaPaw />
};
