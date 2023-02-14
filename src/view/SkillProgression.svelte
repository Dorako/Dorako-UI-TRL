<script>
   import BigBlueButton from "./BigBlueButton.svelte";
   import ProfButton from "./ProfButton.svelte";
   import SkillIncrease from "./SkillIncrease.svelte";
</script>

<div class="wrapper">
   <div class="titleGroup">
      <div class="left">
         <div class="title">Deception</div>
         <div class="label">Skill increases</div>
      </div>
      <div class="right">
         <ProfButton />
      </div>
   </div>
   <div class="progression">
      <SkillIncrease prof="legendary" type="disabled" />
      <SkillIncrease prof="master" type="increase" />
      <SkillIncrease prof="expert" type="swap" />
      <SkillIncrease prof="trained" type="locked" />
   </div>
   <BigBlueButton />
</div>

<style lang="scss">
   @use "sass:color";

   .titleGroup {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;

      .title {
         color: #5e0000;
         font-variant-caps: small-caps;
         font-weight: bold;
         // font-size: x-large;
         // font-family: "Modesto Condensed";
         font-family: var(--serif);
         line-height: 1em;
         font-size: large;
      }
      .label {
         text-transform: uppercase;
         font-size: smaller;
      }
   }

   .wrapper {
      display: flex;
      flex-direction: column;
      flex: 0 0 250px;
      height: fit-content;
      gap: 10px;
      //   padding: 10px;
      //   border-radius: 10px;
      //   border: 1px solid wheat;
      //   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5), 0px 2px 10px rgba(0, 0, 0, 0.5);
      background-image: url("background-light.webp");
      background-size: cover;
   }
   .progression {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }
</style>
