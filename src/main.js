import { createApp } from 'vue'
import App from './App.vue'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from "primevue/checkbox";
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import ToastService from 'primevue/toastservice';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Toolbar from 'primevue/toolbar';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('Checkbox', Checkbox);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Toolbar', Toolbar);

app.mount('#app')
