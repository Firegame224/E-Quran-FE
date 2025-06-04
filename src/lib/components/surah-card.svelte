<script lang="ts">
	import { goto } from '$app/navigation';
	export let Api;
</script>

<div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
	{#each Api as Quran (Quran.nomor)}
		<button
			onclick={() => goto(`/surah/${Quran.nomor}`, { invalidateAll: true })}
			class="group flex h-20 w-full cursor-pointer items-center justify-between gap-5 rounded-sm border border-gray-500 px-5 py-2 transition duration-700 hover:border-cyan-400"
		>
			<div class="flex w-[12%] items-center">
				<div
					class="flex h-10 w-10 rotate-45 items-center justify-center rounded-sm bg-gray-600 transition duration-700 group-hover:bg-green-600"
				>
					<p
						class="-rotate-45 font-semibold text-white transition duration-700 group-hover:text-black"
					>
						{Quran.nomor}
					</p>
				</div>
			</div>
			<div class="flex w-[88%] justify-between">
				<div class="flex flex-col items-start justify-between">
					<p class="text-sm font-bold text-white">{Quran.namaLatin}</p>
					<p
						class="text-xs font-semibold text-gray-500 transition duration-700 group-hover:text-green-600"
					>
						{Quran.arti}
					</p>
				</div>
				<div class="flex flex-col items-center justify-between">
					<p class="text-sm font-bold text-white">{Quran.nama}</p>
					<p
						class="text-xs font-semibold text-gray-500 transition duration-700 group-hover:text-green-600"
					>
						{Quran.jumlahAyat} ayat
					</p>
				</div>
			</div>
		</button>
	{/each}
</div>
