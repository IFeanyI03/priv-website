import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyView from "../views/PrivacyView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/privacy",
            name: "privacy",
            component: PrivacyView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
