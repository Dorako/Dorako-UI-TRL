<script>
   import { faFilter } from "@fortawesome/free-solid-svg-icons";

   import SkillRow from "./SkillRow.svelte";

   let skills = [
      { name: "Acrobatics", bonus: 10, prof: "master" },
      { name: "Arcana", bonus: 1, prof: "untrained" },
      { name: "Athletics", bonus: 14, prof: "legendary" },
      { name: "Crafting", bonus: 1, prof: "untrained" },
      { name: "Deception", bonus: 4, prof: "untrained" },
      { name: "Diplomacy", bonus: 11, prof: "expert" },
      { name: "Intimidation", bonus: 11, prof: "expert" },
      { name: "Medicine", bonus: 1, prof: "untrained" },
      { name: "Nature", bonus: 8, prof: "untrained" },
      { name: "Survival", bonus: 8, prof: "trained" },
      { name: "Occultism", bonus: 1, prof: "untrained" },
      { name: "Performance", bonus: 11, prof: "expert" },
      { name: "Religion", bonus: 8, prof: "trained" },
      { name: "Society", bonus: 1, prof: "untrained" },
      { name: "Stealth", bonus: 9, prof: "trained" },
      { name: "Thievery", bonus: 2, prof: "untrained" },
   ];

   let coreSkills = [
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
   $: console.log(selectedSkill + ": " + actualSkills[selectedSkill].abilityModifier.modifier);
   let selectedSkill = "deception";
</script>

<div class="wrapper" on:click>
   {#each skills as skill}
      <SkillRow
         isActive={selectedSkill === skill.name.toLowerCase()}
         on:click={() => (selectedSkill = skill.name.toLowerCase())}
         prof={skill.prof}
         bonus={skill.bonus}
         name={skill.name}
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
