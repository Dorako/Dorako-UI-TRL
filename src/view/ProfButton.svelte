<script>
</script>

<select class="prof" name="prof">
   <option value="untrained">Untrained</option>
   <option value="trained">Trained</option>
   <option value="expert">Expert</option>
   <option value="legendary">Legendary</option>
</select>

<style lang="scss">
   @use "sass:color";

   select [value="trained"] {
      background: blue;
   }

   .prof {
      cursor: pointer;
      height: 28px;
      appearance: none;
      padding: 0px 5px;
      display: flex;
      flex: 0 0 100px;
      width: 100px;
      border-radius: 3px;
      font-size: medium;
      justify-content: center;
      transition: 0.1s;
      line-height: 1.5em;
      border: 2px solid rgba(255, 255, 255, 0.25);
      background-color: #424242;
      color: white;

      &:hover {
         background-color: #575757;
         transform: scale(1.04);
      }
   }
</style>
