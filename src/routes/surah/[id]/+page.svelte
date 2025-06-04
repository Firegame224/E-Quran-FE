<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Headers from '$lib/components/headers.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Pause, Play } from 'lucide-svelte';
	$: surah = $page.data.surah;

	let audioRef: HTMLAudioElement;
	let isPlaying = false;
	let audioRefs: HTMLAudioElement[] = [];
	let playingIndex: number | null = null;
	let cardElement: HTMLElement[] = [];

	function togglePlay() {
		if (audioRef) {
			if (isPlaying) {
				isPlaying = false;
				audioRef.pause();
			} else {
				isPlaying = true;
				audioRef.play();
			}
		}
	}

	function togglePlays(index: number) {
		if (audioRefs[index].paused) {
			audioRefs[index].play();
			playingIndex = index;
		} else {
			audioRefs[index].pause();
			playingIndex = null;
		}
	}

	function toggleNext(index: number) {
		let nextIndex = index + 1;
		const nextAudio = audioRefs[nextIndex];
		if (nextAudio) {
			nextAudio.play();
			playingIndex = nextIndex;
			cardElement[nextIndex].scrollIntoView({ behavior: 'smooth' });
		} else {
			audioRefs[index].pause();
			playingIndex = null;
		}
	}

</script>

<Headers teks={`${surah.nomor} / 114`}/>
<main class="h-full w-full">
	<div class="flex w-full flex-col gap-5 p-5 py-10 md:px-36">
		<div
			class="flex w-full flex-col gap-3 rounded-md bg-gradient-to-br from-green-600 to-green-900 p-5"
		>
			<div class="flex w-full flex-col items-center justify-center">
				<p class="text-3xl font-bold text-white">{surah.nama}</p>
				<p class="text-xl font-bold text-white">{surah.namaLatin}-{surah.nomor}</p>
			</div>
			<div class="flex w-full flex-col items-center justify-center">
				<p class="text-sm font-semibold text-white">({surah.arti}) - {surah.jumlahAyat} ayat</p>
				<p class="text-sm text-white">Diturunkan Di {surah.tempatTurun}</p>
			</div>
			<div class="w-full items-center">
				<p class="text-justify md:text-center text-white">{@html surah.deskripsi}</p>
			</div>
			<div class="flex w-full items-center justify-end">
				<audio bind:this={audioRef} src={surah.audioFull['02']} on:ended={() => (isPlaying = false)}
				></audio>
				<Button
					variant={'ghost'}
					onclick={togglePlay}
					class="w-fit rounded bg-green-600 px-3 py-1 text-white"
				>
					{#if isPlaying}
						<Pause size={20} />
					{:else}
						<Play size={20} />
					{/if}
				</Button>
			</div>
		</div>
		<div class="grid w-full grid-cols-1 items-center justify-center gap-2">
			{#each surah.ayat as ayat, index}
				<div
					bind:this={cardElement[index]}
					class={`${playingIndex === index ? 'border-2 border-green-600 shadow shadow-black' : 'border border-white'} flex min-h-64 w-full flex-col gap-5 rounded-md border-solid bg-transparent p-5`}
				>
					<p class="w-20 text-sm text-gray-400">{surah.nomor}:{ayat.nomorAyat}</p>
					<div class="flex w-full items-center justify-end">
						<p class="max-w-full text-right text-2xl break-words text-white">{ayat.teksArab}</p>
					</div>
					<div class="mt-2 flex w-full flex-col gap-2">
						<p class="w-full text-left text-sm font-semibold text-green-600 md:pr-5">
							{ayat.teksLatin}
						</p>
						<p class="w-full text-left text-sm font-semibold text-white md:pr-5">
							{ayat.teksIndonesia}
						</p>
					</div>
					<audio
						bind:this={audioRefs[index]}
						src={ayat.audio['02']}
						on:ended={() => toggleNext(index)}
					></audio>
					<Button
						variant={'ghost'}
						onclick={() => togglePlays(index)}
						class="w-fit rounded bg-green-600 px-3 py-1 text-white"
					>
						{#if playingIndex === index}
							<Pause size={20} />
						{:else}
							<Play size={20} />
						{/if}
					</Button>
				</div>
			{/each}
		</div>
		<div class="flex w-full items-center justify-center gap-5">
			<div>
				<Button
					disabled={!surah.suratSebelumnya}
					onclick={() => goto(`/surah/${surah.suratSebelumnya.nomor}`)}
					class="w-fit rounded bg-green-600 px-3 py-1 text-white transition duration-700 hover:bg-green-200 hover:text-green-600"
					>Prev</Button
				>
			</div>
			<div>
				<Button
					disabled={!surah.suratSelanjutnya}
					onclick={() => goto(`/surah/${surah.suratSelanjutnya.nomor}`)}
					class="w-fit rounded bg-green-600 px-3 py-1 text-white transition duration-700 hover:bg-green-200 hover:text-green-600"
					>Next</Button
				>
			</div>
		</div>
		<Button
			onclick={() => window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight })}
			class="fixed bottom-2 right-2 w-fit md:bottom-5 md:right-5 rounded bg-green-600 px-3 py-1 text-white transition duration-700 hover:bg-green-200 hover:text-green-600"
		>
			Lewati	
		</Button
		>
	</div>
</main>
