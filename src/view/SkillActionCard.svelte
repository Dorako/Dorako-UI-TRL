<script>
   import ActButton from "./ActButton.svelte";
   import Fa from "svelte-fa/src/fa.svelte";
   import { faDiceD20, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
   import Outlinebutton from "./Outlinebutton.svelte";
   export let expanded = true;
   $: myVar = expanded ? "expanded" : "collapsed";
   $: console.log(expanded);
   $: console.log(myVar);
</script>

<div class="card">
   <div class="wrapper">
      <div class="titleGroup">
         <div class="title"><slot name="title" /></div>
         <div
            class="toggle"
            on:click={() => {
               expanded = !expanded;
            }}
         >
            {#if expanded}
               <Fa icon={faAngleUp} size="lg" />
            {:else}
               <Fa icon={faAngleDown} size="lg" />
            {/if}
         </div>
      </div>
      <!-- <hr /> -->
      <!-- {#if expanded} -->
      <div class="rel">
         <div class={"contents " + myVar}>
            <!-- <slot name="contents" /> -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </div>
      </div>
      <!-- {/if} -->
      <div class="buttons">
         <div class="left">
            <Outlinebutton>Open</Outlinebutton>
            <Outlinebutton>Pin</Outlinebutton>
         </div>
         <ActButton />
      </div>
   </div>
</div>

<style lang="scss">
   @use "sass:color";

   .wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   .card {
      /* Background/Color */
      background: #f8f4f1;
      /* Bastard/Soft border dark */
      border: 1px solid rgba(0, 0, 0, 0.28);
      /* Soft Shadow/Super Soft */
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
      border-radius: 5px;
      padding: 10px;

      .contents {
         transition: 0.25s;
         max-height: 80px;
         overflow-y: scroll;
         &.collapsed {
            transition: 0.25s;
            max-height: 0px;
            opacity: 0;
            visibility: hidden;
         }
      }
      .titleGroup {
         display: flex;
         justify-content: space-between;
         gap: 10px;
         font-size: larger;
         font-weight: bold;

         .title {
            color: #5e0000;
            font-variant-caps: small-caps;
            font-family: "Modesto Condensed";
            font-size: x-large;
         }
         .toggle {
            color: black;
            cursor: pointer;
            user-select: none;
         }
      }

      hr {
         border-top: 1px solid #e5e1de;
      }

      .traits {
         display: flex;
         gap: 3px;
      }

      .text {
         color: #1c1c1c;
         line-height: 1.2;
         mask-image: linear-gradient(180deg, #000 80%, transparent);
      }

      .buttons {
         display: flex;
         gap: 5px;
         justify-content: space-between;
         .left {
            display: flex;
            gap: 5px;
         }
      }
   }
</style>
