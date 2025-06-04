<script>
	import { ChevronLeft } from 'lucide-svelte';
	import { Button } from './ui/button';
	import { goto } from '$app/navigation';
    export let teks;
</script>

<div class="flex w-full items-center justify-between gap-5 p-5 px-10">
	<p class="text-white font-semibold">{teks}</p>
    <Button
		onclick={() => goto('/')}
		class="flex items-center justify-center gap-2 bg-green-600 transition duration-700 hover:bg-green-200"
	>
		<ChevronLeft size={20} />
		<p>Kembali</p>
	</Button>
</div>
