import { defineStore } from "pinia";
import { del, get, post, put } from "@/services/api";

export const useCategoryStore = defineStore("category", {
    state: () => ({
        category: {},
        categories: [],
        trash: [],
    }),

    getters: {
        getCategory: (state) => state.category,
        getCategories: (state) => state.categories,
        getTrash: (state) => state.trash,
    },

    actions: {
        async addCategory(data) {
            const response = await post("/admin/category", data);
        },

        async editCategory(id, data) {
            const response = await post("/admin/category/" + id, data);
        },

        async deleteCategory(id) {
            const response = await del("/admin/category/" + id);
        },

        async getListCategory(url = `/admin/category/`) {
            const response = await get(url);

            this.categories = response.data;
        },

        async getListTrashCategory(url = `/admin/category/trash`) {
            const response = await get(url);

            this.trash = response.data;
        },

        async deleteTrash(id) {
            const response = await del(`/admin/category/trash/` + id);
        },

        async restoreFromTrash(id) {
            const response = await put(`/admin/category/trash/restore/` + id);
        },

        async getListCategoryHome() {
            const response = await get("/category");

            this.categories = response.data;
        },

        async getDetailCategoryHome(id) {
            const response = await get("/category/" + id);

            this.category = response.data;
        },
    },
});
