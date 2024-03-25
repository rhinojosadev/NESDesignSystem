import { fn } from '@storybook/test';
import "../components/button/index.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: 'nes-button',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};


const Template = ({ myParam }) => `
  <nes-button type='default' label='Normal'></nes-button>
`;

const PrimaryTemplate = () => `
<nes-button type='primary' label='Primary'></nes-button>
`

const WarningTemplate = () => `
<nes-button type='warning' label='Warning'></nes-button>
`



export const Primary = PrimaryTemplate.bind({});

export const Normal = Template.bind({});

export const Warning = WarningTemplate.bind({});

Normal.args = {
    myParam: 'My Value',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
