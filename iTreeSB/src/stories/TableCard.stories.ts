// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import TableCardComponent from './tableCard.component';

export default {
  title: 'Example/Tables/TableCards/TableCard',
  component: TableCardComponent,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TableCardComponent> = (args: TableCardComponent) => ({
  props: args,
});

export const Card1 = Template.bind({});
Card1.args = {
  header: 'Tabele card',
};

