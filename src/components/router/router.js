import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import AdminLayout from '../../components/layout/Admin.vue'
import CommonLayout from '../../components/layout/Common.vue'
import LogIn from '../../Views/LogIn.vue'
import EmployeeList from '../../Views/EmployeeList.vue'
import AddEmployee from '../../Views/AddEmployee.vue'
 
const routes = [
   {
    path: '/',
    name: 'commonLayout',
    component: CommonLayout
   },
   {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    redirect: '/admin/employee-list',
    children: [
        {
            path: 'employee-list',
            name: 'employeeList',
            component: EmployeeList
        },
        {
            path: 'add-employee',
            name: 'addEmployee',
            component: AddEmployee
        },
    ]
   },
   {
    path: '/login',
    name: 'login',
    component: LogIn
   },
]
const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router;
