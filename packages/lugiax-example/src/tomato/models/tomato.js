/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

console.info('hello');
const model = 'tomato';
const state = {
  tomotos: [],
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {},
  },
});
