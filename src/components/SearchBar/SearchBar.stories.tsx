/* eslint-disable */
import SearchBar from "./SearchBar";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "SearchBar",
};

export const Default = () => <SearchBar term="crypto" />;

Default.story = {
  name: "default",
};
