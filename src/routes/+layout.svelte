<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>
<svelte:head>
	<title>E-Quran by Fiky Alrasya</title>
	<meta name="description" content="website Al-Quran lengkap" />
</svelte:head>

<div class="w-full flex flex-col min-h-screen bg-[#202124]">
<Navbar/>
{@render children()}
</div>