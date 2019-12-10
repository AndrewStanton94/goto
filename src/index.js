// index.js

import Vue from 'vue';
import App from './components/App.vue';
import journeyInput from './components/Journey-input';

Vue.component('journey-input', journeyInput);
new Vue({ render: (createElement) => createElement(App) }).$mount('#app');
