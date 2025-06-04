<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>
<svelte:head>
	
</svelte:head>

<div class="w-full flex flex-col min-h-screen bg-[#202124]">
<Navbar/>
{@render children()}
</div>