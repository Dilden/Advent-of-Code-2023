<script>
  import { enhance } from '$app/forms';
  export let form;
</script>

{#if form?.sum}
  Sum is: {form.sum}
{/if}

<form method="POST" action="?/power" use:enhance>
  <label for="games">Input</label>
  <textarea rows="10" columns="25" name="games"></textarea>
  <input type="submit" value="Submit">
</form>

<style>
  form {
    text-align: center;
  }
  input, label, textarea {
    display: block;
    margin: 20px auto;
    width: 100%;
  }
</style>
