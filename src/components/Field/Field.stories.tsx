/* eslint-disable */
import Field from "./Field";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Field",
};

export const Default = () => <Field />;

Default.story = {
  name: "default",
};
