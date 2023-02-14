<script>
</script>

<div class="button" on:click>
   <span><slot>missing button</slot></span>
</div>

<style lang="scss">
   @use "sass:color";

   .button {
      cursor: pointer;
      padding: 0px 5px;
      border: 1px solid rgba(0, 0, 0, 0.28);
      border-radius: 3px;
      transition: 0.1s;
      line-height: 1.7em;
      font-family: Roboto;
      justify-items: center;

      &:hover {
         border: 1px solid rgba(0, 0, 0, 0.48);
         background-color: #fffdfb;
      }

      span {
         display: inline-block;
         vertical-align: middle;
      }
   }
</style>
