<script>
</script>

<div class="actbutton action">
   <span>A</span>
</div>

<style lang="scss">
   @use "sass:color";

   .actbutton {
      font-family: Pathfinder2eActions;
      cursor: pointer;
      // line-height: 1.5em;
      width: 50px;
      // height: 1.5em;
      font-size: xx-large;
      /* Background/Dark */
      background-color: #e7d9cf;
      /* Bastard/Soft border */
      border: 2px solid rgba(254, 254, 254, 0.28);
      /* Hard Shadow/Close */
      box-shadow: 0px 0px 1px black, 0px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      text-align: center;
      justify-content: center;
      transition: 0.1s;

      span {
         // text-shadow:
         // 1px 1px 1px white,
         // -1px -1px 1px white,
         // -1px 1px 1px white,
         // 1px -1px 1px white;
         text-shadow: 0px 1px 1px white;
      }

      &:hover {
         // background-color: #fae7da;
         transform: scale(1.08);
         box-shadow: 0px 0px 1px black, 0px 6px 6px rgba(0, 0, 0, 0.15);
      }
   }
</style>
