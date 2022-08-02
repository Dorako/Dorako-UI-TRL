<script>
   import BigBlueButton from "./BigBlueButton.svelte";
   import SkillActionCard from "./SkillActionCard.svelte";
   import Trait from "./Trait.svelte";
</script>

<div class="cards">
   <SkillActionCard expanded={true}
      ><span slot="title">Create a diversion</span>
      <span slot="contents">
         <div class="traits">
            <Trait traitColor="brown">Mental</Trait>
            <Trait traitColor="red">Concentrate</Trait>
         </div>
         <div class="text">
            <p>
               With a gesture, a trick, or some distracting words, you can create a diversion that draws creatures'
               attention elsewhere. If you ...
            </p>
         </div>
      </span></SkillActionCard
   >
   <SkillActionCard expanded={false}><span slot="title">Impersonate</span></SkillActionCard>
   <SkillActionCard expanded={false}><span slot="title">Lie</span></SkillActionCard>
</div>

<style lang="scss">
   .cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .title {
         font-family: "Modesto Condensed";
      }
      .text {
         font-family: Roboto;
      }
   }
</style>
