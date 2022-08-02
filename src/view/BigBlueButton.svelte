<script>
</script>

<div class="button">Complete</div>

<style lang="scss">
   @use "sass:color";

   .button {
      cursor: pointer;
      padding: 5px 5px;
      display: flex;
      flex: 0 0 18px;
      width: 100%;
      font-size: larger;
      border-radius: 0px;
      text-align: center;
      justify-content: center;
      transition: 0.1s;
      line-height: 1.5em;
      background-color: #171f69;
      border: 2px solid #e5d8bc;
      color: white;
      font-weight: 600;
      text-shadow: 0px 0px 2px black;
      font-family: Eczar;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.2);

      &:hover {
         background-color: #1e10be;
         transform: scale(1.02);
         box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 6px 6px rgba(0, 0, 0, 0.1);
      }
   }
</style>
