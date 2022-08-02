<script>
   // import Fa, {
   // } from 'svelte-fa/src/fa.svelte'
   // import FaLayers from "svelte-fa/src/fa.svelte"

   import Fa from "svelte-fa";
   import {
      faCirclePlus,
      faCircle,
      faCircleDot,
      faCircleArrowUp,
      faRightLeft,
   } from "@fortawesome/free-solid-svg-icons";

   export let prof;
   export let type;

   //    let data = await fromUuid("Compendium.pf2e.actionspf2e.QNAVeNKtHA0EUw4X");
</script>

<div class={"box " + (type === "disabled" ? "disabled " : "")}>
   <div class={"prof " + prof}>
      {prof}
   </div>
   <div class="contents">
      <div class="left">
         {#if type === "increase" || type == "disabled"}
            Add skill increase
         {:else}
            <div class="lvl">
               <div class="lvlLabel">Lvl</div>
               <div>1</div>
            </div>
            <div class="icon">
               {#if type === "locked"}
                  <Fa fw icon={faCircleDot} size="2x" />
               {:else}
                  <Fa fw icon={faCircleArrowUp} size="2x" />
               {/if}
            </div>
            <div class="source">
               <div class="sourceLabel">Class</div>
               <div class="sourceValue">Any Skill</div>
            </div>
         {/if}
      </div>
      <div class="rightIcon">
         {#if type === "increase" || type == "disabled"}
            <Fa fw icon={faCirclePlus} size="2x" />
         {:else if type === "swap"}
            <Fa fw icon={faRightLeft} size="2x" />
         {:else if type === "locked"}{/if}
      </div>
   </div>
</div>

<style lang="scss">
   @use "sass:color";

   .source {
      text-align: start;
      .sourceLabel {
         font-size: small;
         font-variant: small-caps;
         color: #892518;
         font-weight: bolder;
      }

      .sourceValue {
         font-family: Gelasio;
         font-size: large;
      }
   }

   .box {
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      // border: 1px solid rgba(0,0,0,0.25);
      &.disabled {
         opacity: 0.5;
         .rightIcon:hover {
            transform: none;
            cursor: not-allowed;
         }
      }
      .contents {
         display: flex;
         height: 50px;
         padding: 2px 15px;
         justify-content: space-between;
         gap: 10px;
         align-items: center;
         border-radius: 3px;
         border: 1px solid rgba(0, 0, 0, 0.25);
         border-top-left-radius: 0px;
         border-top-right-radius: 0px;
         border-top: 0px;

         .left {
            display: flex;
            gap: 10px;
            .lvl {
               text-transform: uppercase;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               gap: 3px;
               .lvlLabel {
                  font-size: x-small;
                  font-weight: bolder;
               }
            }
         }
      }

      .icon {
         color: #423831;
         justify-content: center;
         align-self: center;
      }

      .rightIcon {
         cursor: pointer;
         color: #423831;
         transition: 0.1s;
         &:hover {
            transform: scale(1.1);
         }
      }
   }

   .prof {
      text-transform: uppercase;
      border-radius: 5px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      display: inline-block;
      padding: 2px 5px;
      font-family: Roboto;
      font-size: medium;
      font-weight: bolder;
      border: 1px solid rgba(0, 0, 0, 0.25);

      &.trained {
         color: white;
         background: #272e8d;
      }
      &.expert {
         color: white;
         background: #521488;
      }
      &.master {
         color: black;
         background: #ddad5d;
      }
      &.legendary {
         color: white;
         background: #892518;
      }
   }
</style>
