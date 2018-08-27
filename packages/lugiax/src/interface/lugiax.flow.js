/**
 * Created by liguoxin on 2017/3/14.
 * @flow
 */
import type { RegisterResult, } from '@lugia/lugiax-core';

declare module '@lugia/lugiax' {
  declare type EventConfig = {
    [eventName: string]: { [fieldName: string]: Function }
  };
  declare type BindConfig = string | { [fieldName: string]: string };
  declare type Field2Props = { [key: string]: string };
  declare interface Lugiax {
    connect(
      model: RegisterResult | Array<RegisterResult>,
      mapProps: (state: Object) => Object
    ): (target: Object) => any;
  }

  declare module.exports: Lugiax;
}
