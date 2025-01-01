import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginPage from '@/views/LoginPage.vue';
import BulletinDetailView from '@/views/BulletinBoardDetail.vue';
import BulletinBoardPostForm from '@/components/form/BulletinBoardPostForm.vue';
import BulletinBoardEdit from '@/views/BulletinBoardEdit.vue';
// ルーターの設定
const routes = [
    // 初期ページをログインにリダイレクト
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        meta: { requiresAuth: false }
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/detail/:id',
        name: 'BulletinDetail',
        component: BulletinDetailView,
        props: true,
        meta: { requiresAuth: true }
    },
    {
        path: '/detail/:id/edit',
        name: 'BulletinBoardEdit',
        component: BulletinBoardEdit,
        meta: { requiresAuth: true }
    },
    {
        path: '/create',
        name: 'BulletinCreate',
        component: BulletinBoardPostForm,
        meta: { requiresAuth: true }
    }
    // 他のルートが必要な場合はここに追加
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
// ルートガードの設定
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const token = localStorage.getItem('token');
    if (requiresAuth && !token) {
        next('/login');
    }
    else {
        next();
    }
});
export default router;
