import * as React from "react";
import { HomePage } from "../../home-page/HomePage";

export default {
  title: "Example/Home page",
  component: HomePage,
};

const Template = (args: any) => <div>storybook tesst <HomePage /></div>;

export const Primary: any = Template.bind({});
Primary.args = {};
