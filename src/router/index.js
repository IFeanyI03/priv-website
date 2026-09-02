import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import SetupView from "../views/SetupView.vue";
import UsageView from "../views/UsageView.vue";
import ShareView from "../views/ShareView.vue";
import ManageAccessView from "../views/ManageAccessView.vue";
import DeleteAccountView from "../views/DeleteAccountView.vue";
import NotFoundView from "../views/NotFoundView.vue";

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
        {
            path: "/share",
            name: "share",
            component: ShareView,
        },
        {
            path: "/manage-access",
            name: "manage-access",
            component: ManageAccessView,
        },
        {
            path: "/delete-account",
            name: "delete-account",
            component: DeleteAccountView,
        },

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
