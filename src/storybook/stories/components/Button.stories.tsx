import { Buttons } from "../../../components/button/Button.component";
import * as React from "react";

export default {
  title: "Component/Buttons",
  component: Buttons,
};

const Template = (args: any) => <div><Buttons /></div>;

export const Primary: any = Template.bind({});
Primary.args = {};
