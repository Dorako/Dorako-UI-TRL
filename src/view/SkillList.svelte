<script>
   import SkillRow from "./SkillRow.svelte";

   // let skills = [
   //    { name: "Acrobatics", bonus: 10, prof: "master" },
   //    { name: "Arcana", bonus: 1, prof: "untrained" },
   //    { name: "Athletics", bonus: 14, prof: "legendary" },
   //    { name: "Crafting", bonus: 1, prof: "untrained" },
   //    { name: "Deception", bonus: 4, prof: "untrained" },
   //    { name: "Diplomacy", bonus: 11, prof: "expert" },
   //    { name: "Intimidation", bonus: 11, prof: "expert" },
   //    { name: "Medicine", bonus: 1, prof: "untrained" },
   //    { name: "Nature", bonus: 8, prof: "untrained" },
   //    { name: "Survival", bonus: 8, prof: "trained" },
   //    { name: "Occultism", bonus: 1, prof: "untrained" },
   //    { name: "Performance", bonus: 11, prof: "expert" },
   //    { name: "Religion", bonus: 8, prof: "trained" },
   //    { name: "Society", bonus: 1, prof: "untrained" },
   //    { name: "Stealth", bonus: 9, prof: "trained" },
   //    { name: "Thievery", bonus: 2, prof: "untrained" },
   // ];

   let coreSkillNames = [
      "acrobatics",
      "arcana",
      "athlethics",
      "crafting",
      "deception",
      "diplomacy",
      "intimidation",
      "medicine",
      "nature",
      "survival",
      "occultism",
      "performance",
      "religion",
      "society",
      "stealth",
      "thievery",
   ];

   let actualSkills = _token.actor.skills;
   let coreSkills = Object.entries(actualSkills).filter((kvp) => coreSkillNames.includes(kvp[0]));
   console.log(coreSkills);
   let selectedSkill = "deception";
</script>

<div class="wrapper" on:click>
   {#each coreSkills as skill}
      <SkillRow
         isActive={selectedSkill === skill[1].slug}
         on:click={() => (selectedSkill = skill[1].slug)}
         prof={skill[1].rank}
         bonus={skill[1].modifiers.map((item) => item.modifier).reduce((prev, next) => prev + next)}
         name={skill[1].label}
      />
   {/each}
</div>

<style lang="scss">
   .wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 0px 25px;
   }
</style>
