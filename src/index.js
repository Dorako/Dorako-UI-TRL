import BasicApplication from "./view/BasicApplication.js";

// Hooks.once('ready', () => new BasicApplication().render(true, { focus: true }));
Hooks.on("controlToken", (object, controlled) => new BasicApplication().render(true, { focus: true }));

