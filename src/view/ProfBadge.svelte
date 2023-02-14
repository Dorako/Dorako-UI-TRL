<script>
   export let prof;

   let rankToLabel = {
      0: "untrained",
      1: "trained",
      2: "expert",
      3: "master",
      4: "legendary",
   };
</script>

<div class="wrapper">
   <div class={"prof " + rankToLabel[prof]}>
      <div>{rankToLabel[prof][0].toUpperCase()}</div>
   </div>
</div>

<style lang="scss">
   @use "sass:color";
   .wrapper {
      display: flex;
      justify-self: center;
      align-self: center;
   }

   .prof {
      display: flex;
      height: 1.4em;
      width: 1.4em;
      padding: 3px;
      justify-content: center;
      line-height: 1em;
      // font-size: small;
      color: #f1e9cd;
      font-weight: bold;
      border: 2px solid rgba(254, 254, 254, 0.28);
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2) inset;
      transition: 0.1s;

      &.untrained {
         border-radius: 50%;
         background-color: #424242;
      }
      &.trained {
         border-radius: 11px;
         background-color: #252e93;
      }
      &.expert {
         border-radius: 8px;
         background-color: #5b0c8f;
      }
      &.master {
         border-radius: 5px;
         background-color: #e6ab4c;
         color: #202020;
      }
      &.legendary {
         border-radius: 2px;
         background-color: #95180c;
         color: white;
         box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2) inset;
      }
   }
</style>
