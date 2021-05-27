// generic-toolbar.helpers.js

// methods:
// 1 = create
// 2 = update

export const getActionLabel = (entity, method) => {
  if (!entity || !method) return "Save";

  if (method === 2) return `Update ${entity}`;

  return `Create ${entity}`;
};
