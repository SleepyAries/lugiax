/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component, } from 'react';
import { delay, } from '@lugia/react-test-utils';

import { createRoute, Link, } from '../../../lib/';

export default () => {
  return [
    <div>番茄工作法 🍅</div>,
    <Link to="/tomato/history">历史任务</Link>,
    ' ',
    <Link to="/tomato/now">当前任务</Link>,
    createRoute({
      '/tomato/history': {
        render: async () => {
          return delay(100, () => require('./pages/history'));
        },
      },
      '/tomato': {
        render: async () => {
          return delay(100, () => require('./pages/now'));
        },
        exact: true,
      },
      '/tomato/now': {
        render: async () => {
          return delay(100, () => require('./pages/now'));
        },
      },
    }),
  ];
};
