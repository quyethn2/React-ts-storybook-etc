import { HomePage } from "../../home-page/HomePage";
import * as React from "react";

export default {
  title: "Example/Home page",
  component: HomePage,
};

const Template = (args: any) => <div>storybook tesst <HomePage /></div>;

export const Primary: any = Template.bind({});
Primary.args = {};
