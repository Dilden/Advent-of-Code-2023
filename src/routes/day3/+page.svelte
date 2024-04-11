<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

{#if form?.sum}
	Sum is: {form.sum}
{/if}
{#if form?.nums}
	<ul>
		{#each form.nums as number}
			<li>{number}</li>
		{/each}
	</ul>
{/if}

<form method="POST" action="?/engine" use:enhance>
	<label for="schema">Input</label>
	<textarea rows="10" columns="25" name="schema"></textarea>
	<input type="submit" value="Submit" />
</form>

<style>
	form {
		text-align: center;
	}
	input,
	label,
	textarea {
		display: block;
		margin: 20px auto;
		width: 100%;
	}
</style>
