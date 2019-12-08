<template>
	<main class="container">
		<h1>Hello {{ bundler }}</h1>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			bundler: 'Parcel',
		};
	},
});
</script>

<style lang="scss" scoped>
.container {
	color: green;
}
</style>
