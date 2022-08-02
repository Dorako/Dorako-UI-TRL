<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true} />

<script>
   import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
   import Fa from "svelte-fa";
   import {
      faCirclePlus,
      faCircle,
      faCircleDot,
      faCircleArrowUp,
      faRightLeft,
   } from "@fortawesome/free-solid-svg-icons";
   // import BigBlueButton from "./BigBlueButton.svelte";
   import SkillProgression from "./SkillProgression.svelte";
   import SkillsPage from "./SkillsPage.svelte";
   // import Actions from "./Actions.svelte";
   import Sidebar from "./Sidebar.svelte";
   import { gameState } from "@typhonjs-fvtt/runtime/svelte/store";
   const isGM = game.user.isGM;
   let token = _token;
   let skills = token.actor.skills;
   console.log(token);

   export let elementRoot;

   async function getFeint() {
      return await fromUuid("Compendium.pf2e.actionspf2e.QNAVeNKtHA0EUw4X");
   }
</script>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <main>
      <!-- {#if $gameState.user.isGM} -->
      {#if isGM}
         Is GM user
      {:else}{/if}

      <!-- <SkillProgression /> -->
      <!-- <Sidebar /> -->
      <SkillsPage />
   </main>
   <!-- {getFeint().data.data.description["value"]}; -->
</ApplicationShell>

<style lang="scss">
   main {
      // background-image: url("./background-light.webp");
   }
</style>
