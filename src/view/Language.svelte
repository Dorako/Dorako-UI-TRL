<script>
   export let rarity;
</script>

<div class={["trait", rarity.toString()].join(" ")}>
   <slot>missing trait</slot>
</div>

<style lang="scss">
   @use "sass:color";

   .trait {
      // text-transform: uppercase;
      border-radius: 3px;
      display: inline-block;
      padding: 0px 5px;
      // box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.5) inset;
      border: 2px solid rgba(255, 255, 255, 0.25);
      font-family: Roboto;
      font-size: small;
      font-weight: bold;
      height: fit-content;

      &.common {
         color: white;
         background: var(--alt);
      }
      &.uncommon {
         color: white;
         background: #272e8d;
      }
      &.rare {
         color: white;
         background: #531489;
      }
   }
</style>
