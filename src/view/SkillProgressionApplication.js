/* eslint-disable brace-style */
import { SvelteApplication } from "@typhonjs-fvtt/runtime/svelte/application";

import SkillProgressionApplication from "./SkillProgressionApplication.svelte";

export default class BasicApplication extends SvelteApplication {
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: "PF2E.skills.progression", // Automatically localized from `lang/en.json`.
         width: 300,
         height: 460,

         svelte: {
            class: SkillProgressionApplication,
            target: document.body,
         },
      });
   }
}

