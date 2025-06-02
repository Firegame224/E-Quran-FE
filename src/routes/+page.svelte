<script lang="ts">
	import { page } from "$app/state";
	import SurahCard from "$lib/components/surah-card.svelte";

	let { Quran } = page.data; 
</script>

<main class="h-full w-full">
	<div class="flex w-full flex-col gap-5 p-5 md:px-36 py-10">
		<div class="flex w-full border-b-2 border-gray-500">
			<p class="border-b border-b-white p-2 text-lg text-white">Surah</p>
		</div>
		<SurahCard Api={Quran}/>
	</div>
</main>
