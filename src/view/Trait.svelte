<script>
   export let traitColor;
</script>

<div class={["trait", traitColor.toString()].join(" ")}>
   <slot>missing trait</slot>
</div>

<style lang="scss">
   @use "sass:color";

   .trait {
      text-transform: uppercase;
      border-radius: 3px;
      display: inline-block;
      padding: 0px 5px;
      box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.5) inset;
      border: 2px solid rgba(0, 0, 0, 0.1);
      font-family: Roboto;
      font-size: x-small;
      height: fit-content;
      font-weight: bolder;
      &.brown {
         color: white;
         background: #786452;
      }
      &.red {
         color: white;
         background: #671b17;
      }
      &.blue {
         color: white;
         background: #0f116e;
      }
   }
</style>
