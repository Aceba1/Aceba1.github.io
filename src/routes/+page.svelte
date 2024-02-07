<script>
  import Router from 'svelte-spa-router'
	import routes from './routes';
</script>

<!-- This will behave as the ROOT for all other components -->

<svelte:head>
  <title>Navaurum</title>
</svelte:head>

<body>
  <Router {routes} />
</body>
