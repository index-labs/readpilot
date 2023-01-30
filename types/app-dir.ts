import { PropsWithChildren } from "react";

type DefaultParam = Record<string, string>;

export type NextLayout<Param extends DefaultParam = DefaultParam> = (
  props: PropsWithChildren<{ params: Param }>
) => JSX.Element | Promise<JSX.Element>;

export type NextAppPage = () => JSX.Element | Promise<JSX.Element>;