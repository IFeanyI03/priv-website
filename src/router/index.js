import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import SetupView from "../views/SetupView.vue";
import UsageView from "../views/UsageView.vue";

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
        {
            path: "/setup",
            name: "setup",
            component: SetupView,
        },
        {
            path: "/how-to-use",
            name: "usage",
            component: UsageView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
