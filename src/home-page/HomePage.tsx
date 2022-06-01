import { Buttons } from "@src/components/button/Button.component";
import * as React from "react";

export interface IHomePageProps {}

export const HomePage = (props: IHomePageProps) => {
  return (
    <>
      <div>test view HomePage</div>
      <div>test view Button material-ui</div>
      <Buttons />
    </>
  );
};
