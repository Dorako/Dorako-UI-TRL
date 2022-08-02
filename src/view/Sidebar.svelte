<script>
   import Fa from "svelte-fa/src/fa.svelte";
   import {
      faDiceD20,
      faShield,
      faEye,
      faGear,
      faAnkh,
      faHeartCirclePlus,
      faHeartCircleMinus,
      faShieldHeart,
      faPlus,
   } from "@fortawesome/free-solid-svg-icons";
   import ProfBadge from "./ProfBadge.svelte";
   import Outlinebutton from "./Outlinebutton.svelte";
</script>

<div class="sidebar">
   <div class="item">
      <div class="titleGroup">
         <div class="left">
            <Fa fw icon={faShield} size="lg" />
            <span class="title">Saving throws</span>
         </div>
      </div>
      <hr />

      <div class="rows">
         <div class="row">
            <div class="die">
               <Fa fw icon={faDiceD20} />
            </div>
            <div class="bonus">+10</div>
            <div class="prof"><ProfBadge prof="expert" /></div>
            <div class="name">Reflex</div>
         </div>
         <div class="row">
            <div class="die">
               <Fa fw icon={faDiceD20} />
            </div>
            <div class="bonus">+4</div>
            <div class="prof"><ProfBadge prof="trained" /></div>
            <div class="name">Fortitude</div>
         </div>

         <div class="row">
            <div class="die">
               <Fa fw icon={faDiceD20} />
            </div>
            <div class="bonus">+3</div>
            <div class="prof"><ProfBadge prof="untrained" /></div>
            <div class="name">Will</div>
         </div>
      </div>
   </div>

   <div class="item">
      <div class="titleGroup">
         <div class="left">
            <Fa fw icon={faShieldHeart} size="lg" />
            <span class="title">Immunities</span>
         </div>
         <div class="settings"><Fa fw icon={faPlus} size="lg" /></div>
      </div>
      <hr />

      <div class="sensesBody">
         <div class="rows" />
         <div class="senses">
            <Outlinebutton>Fire</Outlinebutton>
         </div>
      </div>
   </div>

   <div class="item">
      <div class="titleGroup">
         <div class="left">
            <Fa fw icon={faHeartCircleMinus} size="lg" />
            <span class="title">Weaknesses</span>
         </div>
         <div class="settings"><Fa fw icon={faPlus} size="lg" /></div>
      </div>
      <hr />

      <div class="sensesBody">
         <div class="rows" />
         <div class="senses">
            <Outlinebutton>Cold | 5</Outlinebutton>
            <Outlinebutton>Bludgeoning | 2</Outlinebutton>
         </div>
      </div>
   </div>
   <div class="item">
      <div class="titleGroup">
         <div class="left">
            <Fa fw icon={faHeartCirclePlus} size="lg" />
            <span class="title">Resistances</span>
         </div>
         <div class="settings"><Fa fw icon={faPlus} size="lg" /></div>
      </div>
      <!-- <hr> -->

      <div class="sensesBody">
         <div class="rows" />
         <div class="senses" />
      </div>
   </div>

   <div class="item">
      <div class="titleGroup">
         <div class="left">
            <Fa fw icon={faEye} size="lg" />
            <span class="title">Senses</span>
         </div>
         <div class="settings"><Fa fw icon={faGear} size="lg" /></div>
      </div>
      <hr />

      <div class="sensesBody">
         <div class="rows">
            <div class="row">
               <div class="die">
                  <Fa fw icon={faDiceD20} />
               </div>
               <div class="bonus">+10</div>
               <div class="prof"><ProfBadge prof="legendary" /></div>
               <div class="name">Perception</div>
            </div>
            <hr />
         </div>
         <div class="senses">
            <Outlinebutton>Darkvision</Outlinebutton>
            <Outlinebutton>Scent (Imprecise) | 30ft</Outlinebutton>
         </div>
      </div>
   </div>
</div>

<style lang="scss">
   @use "sass:color";

   .item {
      /* Background/Color */
      background: #f8f4f1a0;
      /* Bastard/Soft border dark */
      border: 1px solid rgba(0, 0, 0, 0.28);
      /* Soft Shadow/Super Soft */
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
      border-radius: 5px;
      padding: 5px;
   }

   .settings {
      cursor: pointer;
      transition: 0.1s;
      &:hover {
         transform: scale(1.1);
      }
   }

   .sensesBody {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }
   .senses {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
   }
   .sidebar {
      display: flex;
      flex-direction: column;
      width: 250px;
      // flex: 0 0 230px;
      gap: 10px;

      .titleGroup {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         gap: 10px;
      }

      .left {
         display: flex;
         flex-direction: row;
         gap: 5px;
      }

      .title {
         font-variant: small-caps;
         font-size: larger;
         font-weight: bolder;
         text-shadow: 0px 1px 1px white;
      }

      hr {
         width: 100%;
         border-top: 1px solid black;
      }
   }

   .rows {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   .row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      font-size: larger;
      line-height: 1.5em;
      transition: 0.1s;
      border-radius: 10px;
      border: 1px solid transparent;

      .die {
         color: black;
         display: flex;
         flex: 0 0 20px;
         margin-top: 3px;
         margin-left: 3px;
         width: 20px;
         overflow: visible;
         height: 20px;
         text-shadow: 0px 1px 1px white;
      }

      .bonus {
         color: #5e0000;
         text-decoration: underline;
         display: flex;
         flex: 0 0 36px;
      }
      .prof {
         display: flex;
         flex: 0 0 30px;
         align-content: center;
         justify-content: center;
      }
      .name {
         display: flex;
         flex-grow: 1;
      }
   }
</style>
