<script lang="ts">
	import { page } from '$app/state';
	import SurahCard from '$lib/components/surah-card.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Search } from 'lucide-svelte';

	let search = '';

	let { Quran } = page.data;

	$: filteredData = Quran.filter((item: any) =>
		item.namaLatin.toLowerCase().includes(search.toLocaleLowerCase())
	);

	console.log(filteredData);
</script>

<main class="h-full w-full">
	<div class="flex w-full items-center justify-center p-5">
		<div class="flex h-10 w-1/3 items-center justify-center">
			<div
				class="flex h-full w-[10%] items-center justify-center rounded-l-sm border border-white bg-white text-black"
			>
				<Search class="h-5 w-5" />
			</div>
			<div class="h-full w-[90%] md:w-[95%]">
				<Input
					bind:value={search}
					placeholder="Carilah di Al-Quran"
					class="h-10 w-full rounded-l-none border-white bg-transparent p-5 text-sm font-semibold text-white outline-transparent focus-visible:ring-0"
				/>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col gap-5 p-5 py-10 md:px-36">
		<div class="flex w-full border-b-2 border-gray-500">
			<p class="border-b border-b-white p-2 text-lg text-white">Surah</p>
		</div>
		{#if filteredData.length > 0}
			<SurahCard Api={filteredData}/>
		{:else}
		<div class="w-full flex items-center justify-center">
			<p class="text-gray-500 text-sm">Surah tidak ditemukan</p>
		</div>
		{/if}
	</div>
</main>
