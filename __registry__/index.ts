import React from "react";

export const components = {
  "sidebar-01": {
    name: "Sidebar-01",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "popover",
      "separator",
      "input",
      "command",
    ],
    files: [
      "registry/ui/sidebar/sidebar-01.tsx",
      "registry/ui/sidebar/account-switcher.tsx",
      "registry/ui/sidebar/search.tsx",
      "registry/ui/sidebar/navigation-menu.tsx",
    ],
    component: React.lazy(() => import("@/registry/ui/sidebar/sidebar-01")),
  },
} as const;
