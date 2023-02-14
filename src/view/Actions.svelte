<script>
   import SkillActionCard from "./SkillActionCard.svelte";

   let uuids = [
      "Compendium.pf2e.actionspf2e.GkmbTGfg8KcgynOA",
      "Compendium.pf2e.actionspf2e.QNAVeNKtHA0EUw4X",
      "Compendium.pf2e.actionspf2e.AJstokjdG6iDjVjE",
      "Compendium.pf2e.actionspf2e.ewwCglB7XOPLUz72",
      "Compendium.pf2e.feats-srd.0GF2j54roPFIDmXf",
      "Compendium.pf2e.actionspf2e.3yoajuKjwHZ9ApUY",
      "Compendium.pf2e.actionspf2e.BKnN9la3WNrRgZ6n",
      "Compendium.pf2e.actionspf2e.d9gbpiQjChYDYA2L",
   ];

   let actionDocuments = [];
   for (let index = 0; index < uuids.length; index++) {
      fromUuid(uuids[index]).then((result) => {
         actionDocuments[index] = result;
      });
   }
</script>

<div class="cards">
   {#each actionDocuments as actionDocument}
      <SkillActionCard actionData={actionDocument} expanded={true} />
   {/each}
</div>

<style lang="scss">
   .cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .title {
         // font-family: "Modesto Condensed";
         font-family: var(--serif);
         line-height: 1em;
         font-size: large;
      }
      .text {
         font-family: Roboto;
      }
   }
</style>
