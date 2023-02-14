<script>
   import ProfBadge from "./ProfBadge.svelte";
   export let bonus;
   export let prof;
   export let name;
   let active;
   export { active as isActive };
   import Fa from "svelte-fa/src/fa.svelte";
   import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="skillRow {active ? 'active' : ''}" on:click>
   <div class="die">
      <!-- <Fa fw icon={faDiceD20} size="lg" /> -->
      <div class="fas fw fa-dice-d20" />
   </div>
   <div class="bonus">{bonus >= 0 ? "+" + bonus : bonus}</div>
   <div class="prof"><ProfBadge {prof} /></div>
   <div class="name">{name}</div>
</div>

<style lang="scss">
   @use "sass:color";
   // .fas {
   // }
   // .fa-die {
   // }

   .skillRow {
      display: flex;
      flex-direction: row;
      gap: 10px;
      // width: calc(100% - 10px);
      font-size: larger;
      line-height: 1.5em;
      padding: 5px 10px;
      transition: 0.1s;
      // width:100%;
      cursor: pointer;
      border-radius: 10px;
      // border-top-right-radius: 0px;
      // border-bottom-right-radius: 0px;
      border: 1px solid transparent;
      text-shadow: 0px 1px 1px white;

      &.active {
         border: 1px solid gold;
         // border-right: 1px solid transparent;
         background: #f7f4f2;
         transform: scale(1.1);
         // text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
         box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 6px rgba(0, 0, 0, 0.1);
      }
      &:not(.active):hover {
         // background: linear-gradient(-90deg, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 2%, rgba(255,255,255,0.5) 65%, transparent 100%);;
         transform: scale(1.05);
         border: 1px solid gold;
         // border-right: 1px solid transparent;
         background: #f7f4f2;
         // text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
         box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4), 0px 4px 4px rgba(0, 0, 0, 0.2);
         // box-shadow: 0 0 0 1px wheat, 0 0 0 2px #9f725b, inset 0 0 3px rgba(255, 255, 255, .5);
      }
      .die {
         color: black;
         display: flex;
         flex: 0 0 20px;
         margin-top: 2px;
         // margin-left: 3px;
         width: 20px;
         overflow: visible;
         height: 20px;
      }

      .bonus {
         color: #5e0000;
         text-decoration: underline;
         display: flex;
         font-size: x-large;
         flex: 0 0 36px;
      }
      .prof {
         display: flex;
         flex: 0 0 25px;
         align-content: center;
         justify-content: center;
         text-shadow: none;
      }
      .name {
         display: flex;
      }
   }
</style>
