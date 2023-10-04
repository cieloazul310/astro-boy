/* eslint import/prefer-default-export: warn */
import { defineTokens } from "@pandacss/dev";

export const sizes = {
  headerHeight: { value: "56px" },
  contentMaxWidth: { value: "1280px" },
  sidebarWidth: { value: "320px" },
};

export const zIndex = {
  fab: { value: 100 },
  drawer: { value: 200 },
  drawerBackdrop: { value: 199 },
  header: { value: 10 },
};

export default defineTokens({
  sizes,
  zIndex,
});
