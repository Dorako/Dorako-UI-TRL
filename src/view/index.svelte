<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import Sidebar from "./Sidebar.svelte";
import SkillProgression from "./SkillProgression.svelte";
import SkillsPage from "./SkillsPage.svelte";

</script>

<div class=wrapper>
	<SkillProgression/>
	<div class="window">
		<Sidebar/>
	</div>
	<div class="window">
		<SkillsPage/>	
	</div>
</div>

<style lang="scss">
	.wrapper {
		display:flex;
		flex-direction: row;
		gap: 20px;
	}

	.window {
			border-radius: 10px;
			border: 1px solid wheat;
			box-shadow: 0px 2px 2px rgba(0,0,0,0.5), 0px 2px 10px rgba(0,0,0,0.5);
			background-image: url("background-light.webp");
			padding: 10px;
			display: flex;
			background-size:cover;
			height:fit-content
		}

</style>
