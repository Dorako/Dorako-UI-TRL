<script>
   import ActButton from "./ActButton.svelte";
   import Fa from "svelte-fa/src/fa.svelte";
   import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
   import Outlinebutton from "./Outlinebutton.svelte";
   import PostToChatButton from "./PostToChatButton.svelte";
   import Trait from "./Trait.svelte";
   import { add_render_callback } from "svelte/internal";
   export let expanded = true;
   export let actionData;
   let star = false;
   $: myVar = expanded ? "expanded" : "collapsed";
   $: starType = star ? "fas fa-star" : "far fa-star";
   $: filledStarType = star ? "star1 fas fa-star filled" : "star1 fas fa-star empty";

   function myFunc(actionData) {
      if (!actionData) return null;
      console.log(actionData);
      // console.log(actionData.actionCost);
      // return 3;
      let actionCost = actionData.actionCost;
      if (!actionCost) return null;
      let type = actionCost.type;
      if (type === "reaction") return "R";
      if (type === "action") return actionData.actionCost.value;
      if (type === "free") return "F";
   }

   let traits = actionData?.data?.data?.traits?.value ?? [];

   const actor =
      canvas.tokens.controlled[0]?.actor ??
      game.user?.character ??
      new Actor({ name: game.user.name, type: "character" });

   // $: console.log(actionData);

   let isVariant = actionData?.data?.data?.slug === "create-a-diversion";
   let variantText = "";
   let variantTraits = [];
</script>

<div class="card">
   <div class="wrapper">
      <!-- <div class="overlappingstars">
         <div
            class={filledStarType}
            on:click={() => {
               star = !star;
            }}
         />
         <div
            class={"star2 far fa-star"}
            on:click={() => {
               star = !star;
            }}
         />
      </div>-->
      <div class="header">
         <div class="titleGroup">
            <div class="title">
               {actionData?.data?.name}
               {#if isVariant}
                  <div class="fas fa-caret-right" />
                  <div class="variant">{variantText}</div>
               {/if}
            </div>
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
         <div class="traits">
            {#each traits as trait}
               <Trait traitColor="brown">{trait}</Trait>
            {/each}
            {#if variantTraits.length > 0}
               <div class="fas fa-plus" style="font-size: 16px" />
            {/if}

            {#each variantTraits as trait}
               <Trait traitColor="red">{trait}</Trait>
            {/each}
         </div>
      </div>
      <div class={"contents " + myVar}>
         {@html game.pf2e.TextEditor.enrichHTML(actionData?.data?.data?.description?.value)}
      </div>
      <div class="buttons">
         <div class="left">
            <Outlinebutton
               on:click={() => {
                  actionData.sheet.render(true);
               }}>Open</Outlinebutton
            >
            <Outlinebutton>Pin</Outlinebutton>
         </div>
         <div class="right">
            {#if isVariant}
               <!-- <div class="fas fa-caret-right" style="font-size: xx-large" /> -->
               <ActButton
                  on:mouseover={() => {
                     variantText = "Gesture";
                     variantTraits = ["manipulate"];
                  }}
                  on:mouseleave={() => {
                     variantText = "";
                     variantTraits = [];
                  }}
                  on:click={() => {
                     game.pf2e.actions.createADiversion({ event: event, variant: "gesture" });
                  }}>A</ActButton
               >
               <ActButton
                  on:mouseover={() => {
                     variantText = "Trick";
                     variantTraits = ["manipulate"];
                  }}
                  on:mouseleave={() => {
                     variantText = "";
                     variantTraits = [];
                  }}
                  on:click={() => {
                     game.pf2e.actions.createADiversion({ event: event, variant: "trick" });
                  }}>A</ActButton
               >
               <ActButton
                  on:mouseover={() => {
                     variantText = "Distracting words";
                     variantTraits = ["auditory", "linguistic"];
                  }}
                  on:mouseleave={() => {
                     variantText = "";
                     variantTraits = [];
                  }}
                  on:click={() => {
                     game.pf2e.actions.createADiversion({ event: event, variant: "distracting-words" });
                  }}>A</ActButton
               >
            {:else if myFunc(actionData) != null}
               <ActButton
                  on:click={() => {
                     console.log(actionData);
                     game.pf2e.actions.feint({ event: event });
                  }}>{myFunc(actionData)}</ActButton
               >
            {/if}
            <PostToChatButton
               on:click={() => {
                  new actionData.constructor(actionData.toJSON(), { parent: actor }).toChat();
               }}
            />
         </div>
      </div>
   </div>
</div>

<style lang="scss">
   @use "sass:color";

   .overlappingstars {
      position: relative;
      font-size: larger;

      .star1 {
         position: absolute;
         opacity: 50%;
         transition: 0.25s;
         &.empty {
            opacity: 00%;
         }
         &.filled {
            opacity: 100%;
         }
      }

      .star2 {
         position: absolute;
      }
   }

   .star {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
   }

   .wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .header {
         display: flex;
         flex-direction: column;
         gap: 3px;
      }
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

      &:hover .collapsed {
         max-height: 120px;
      }

      .contents {
         transition: 0.25s;
         max-height: 120px;
         overflow-y: scroll;
         position: relative;
         mask-image: linear-gradient(to bottom, transparent 0, black 1em, black calc(100% - 1em), transparent 100%);
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
         align-items: center;

         .title {
            display: flex;
            gap: 5px;
            flex: 1 1 50px;
            color: #5e0000;
            font-variant-caps: small-caps;
            // font-family: "Modesto Condensed";
            font-family: var(--serif);
            line-height: 1em;
            font-size: x-large;
            .variant {
               font-family: "Modesto Condensed";

               line-height: 1.25em;
               font-size: medium;
               display: flex;
               align-items: center;
               // align-items: flex-end;
            }
         }
         .toggle {
            color: black;
            cursor: pointer;
            user-select: none;
         }
      }

      // hr {
      //    border-top: 1px solid #e5e1de;
      // }

      .traits {
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         // height: fit-content;
         gap: 3px;
         // flex: 1 0 200px;
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
         .right {
            display: flex;
            gap: 8px;
         }
      }
   }
</style>
