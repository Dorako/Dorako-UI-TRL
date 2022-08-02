<script>
   import Fa from "svelte-fa/src/fa.svelte";
   import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="button" on:click><Fa fw icon={faAnglesUp} /></div>

<style lang="scss">
   @use "sass:color";

   .button {
      cursor: pointer;
      padding: 2px 5px;
      display: flex;
      flex: 0 0 18px;
      width: 18px;
      border-radius: 3px;
      text-align: center;
      justify-content: center;
      transition: 0.1s;
      // line-height: 1.5em;
      background-color: #3e644c;
      border: 2px solid rgba(254, 254, 254, 0.28);
      color: white;
      text-shadow: 0px 1px 1px black;
      font-weight: bold;
      align-self: center;

      &:hover {
         background-color: #507e60;
         transform: scale(1.08);
      }
   }
</style>
