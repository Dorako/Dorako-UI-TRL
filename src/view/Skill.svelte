<script>
   import Actions from "./Actions.svelte";
   import ProfButton from "./ProfButton.svelte";
   import UpButton from "./UpButton.svelte";
   import SkillProgressionApplication from "./SkillProgressionApplication.js";

   let actionGroupSelected = "available";
   export let skillName = "Deception";
</script>

<div class="wrapper">
   <div class="card">
      <div class="titleGroup">
         <div class="title">{skillName}</div>
         <div class="right">
            <UpButton on:click={() => new SkillProgressionApplication().render(true, { focus: true })} />
            <ProfButton />
         </div>
      </div>
      <hr />
      <div class="description">
         You can trick and mislead others using disguises, lies, and other forms of subterfuge.
      </div>
   </div>
   <div class="actions">
      <div class="group">
         <div
            class={actionGroupSelected === "available" ? "active" : ""}
            on:click={() => (actionGroupSelected = "available")}
         >
            Available (4)
         </div>
         <div
            class={actionGroupSelected === "unavailable" ? "active" : ""}
            on:click={() => (actionGroupSelected = "unavailable")}
         >
            Unavailable (1)
         </div>
         <div class={actionGroupSelected === "feat" ? "active" : ""} on:click={() => (actionGroupSelected = "feat")}>
            Feat (3)
         </div>
      </div>
      <Actions />
   </div>
</div>

<style lang="scss">
   .card {
      background: #f8f4f1;
      border: 1px solid rgba(0, 0, 0, 0.28);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
      border-radius: 5px;
      padding: 10px;

      .titleGroup {
         display: flex;
         justify-content: space-between;
         gap: 10px;
         //  font-size: larger;

         .title {
            color: #5e0000;
            font-variant-caps: small-caps;
            font-size: x-large;
            // font-family: "Modesto Condensed";
            font-family: var(--serif);
            line-height: 1;
         }
      }
      hr {
         border-top: 1px solid #e5e1de;
      }

      // .text {
      //    color: #1c1c1c;
      //    line-height: 1.2;
      //    mask-image: linear-gradient(180deg, #000 80%, transparent);
      // }

      // .buttons {
      //    display: flex;
      //    gap: 5px;
      //    justify-content: space-between;
      //    gap: 10px;
      //    .left {
      //       display: flex;
      //       gap: 5px;
      //    }
      // }
   }
   .wrapper {
      display: flex;
      flex-direction: column;
      // width:300px;
      // flex: 1 0 450px;
      // width: 300px;
      // height: 100%;
      // padding: 10px;
      // background: linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 5%, transparent 100%);;

      .titleGroup {
         display: flex;
         justify-content: space-between;
         gap: 10px;
         .title {
            color: #5e0000;
            font-variant-caps: small-caps;
            font-weight: bold;
            font-size: xx-large;
         }
         .right {
            display: flex;
            gap: 5px;
         }
      }
      hr {
         width: 100%;
         border-top: 1px solid #d1cbc5;
      }

      .description {
         font-style: italic;
         margin-bottom: 10px;
         font-family: Roboto;
      }

      .actions {
         margin-top: 10px;
         display: flex;
         flex-direction: column;
         gap: 10px;
         .group {
            cursor: pointer;
            display: flex;
            justify-content: space-around;
            text-decoration: underline;
            .active {
               text-decoration: underline;

               text-decoration-color: black;
               color: #5e0000;
               font-weight: bold;
            }
         }
      }
   }
</style>
