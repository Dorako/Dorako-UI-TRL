<script>
   import Skill from "./Skill.svelte";
   import SkillList from "./SkillList.svelte";
</script>

<div class="wrapper">
   <div class="left"><SkillList /></div>
   <div class="right"><Skill /></div>
</div>

<style lang="scss">
   .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      // width: 580px;
      // gap: 15px;

      .left {
         display: flex;
         // margin-left:30px;
         // flex: 1 0 300px;
         // background: linear-gradient(-90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);;
      }
      .right {
      }
   }
</style>
