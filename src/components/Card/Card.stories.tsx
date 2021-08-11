/* eslint-disable */
import Card from "./Card";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Card",
};

export const Default = () => <Card />;

Default.story = {
  name: "default",
};
