<script>
	import { Search } from 'lucide-svelte';
	import { Input } from './ui/input';
</script>

<div class="flex w-full items-center justify-center rounded-md bg-[#202124] p-1">
	<div class="flex h-full w-[5%] items-center justify-center">
		<Search class="h-6 w-6 text-white" />
	</div>
	<Input
		placeholder="Carilah di Al-Quran"
		class="w-[95%] rounded-l-none border-none bg-transparent p-5 text-lg font-semibold text-white outline-transparent focus-visible:ring-transparent"
	/>
</div>
