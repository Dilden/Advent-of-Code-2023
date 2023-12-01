<script>
  export let form;
</script>

{#if form?.sum}
  Sum is: {form.sum}
{/if}

<form method="POST">
  <label for="coords">Input</label>
  <textarea rows="10" columns="25" name="coords"></textarea>
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
