import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const FilePreview = () => import("@/views/file-preview.vue");
const HomeView = () => import("@/views/home-view.vue");
const SettingsView = () => import("@/views/settings-view.vue");
const FileUploader = () => import("@/views/file-uploader.vue");
const FileManager = () => import("@/views/file-manager.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/preview/:fileName",
    name: "filePreview",
    component: FilePreview,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/file-uploader",
    name: "file-uploader",
    component: FileUploader,
  },
  {
    path: "/file-manager",
    name: "file-manager",
    component: FileManager,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: "#base64-file-manager",
      top: 100,
      behavior: "smooth",
    };
  },
});

export default router;
