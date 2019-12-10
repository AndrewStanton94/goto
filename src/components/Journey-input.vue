<template>
	<section class="section">
		<h2 class="title">
			Tell me about your journey
		</h2>
		<form class="form">
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label
						class="label"
						for="origin"
					>Your journey starts at</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input
								id="origin"
								v-model="journey.from.location"
								class="input"
								type="text"
								name="origin"
							>
						</div>
						<p class="help">
							Use a station code from
							<a
								href="http://www.railwaycodes.org.uk/stations/station0.shtm"
								target="_blank"
								title="This list of train codes opens in a new tab"
							>
								this list</a>
						</p>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label
						class="label"
						for="destination"
					>Your journey ends at</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input
								id="destination"
								v-model="journey.to.location"
								class="input"
								type="text"
								name="destination"
							>
						</div>
						<p class="help">
							Use a station code from
							<a
								href="http://www.railwaycodes.org.uk/stations/station0.shtm"
								target="_blank"
								title="This list of train codes opens in a new tab"
							>
								this list</a>
						</p>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label
						for="timeOfTravel"
						class="label"
					>You want to travel at:</label>
				</div>
				<div class="field-body">
					<div class="field is-grouped">
						<div class="control">
							<input
								id="timeOfTravel"
								v-model="journey.from.time"
								class="input"
								type="time"
								name="timeOfTravel"
							>
						</div>
						<div class="control">
							<input
								id="dateOfTravel"
								v-model="journey.from.date"
								class="input"
								type="date"
								name="dateOfTravel"
							>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label
						for="timeOfReturn"
						class="label"
					>You want to return at:</label>
				</div>
				<div class="field-body">
					<div class="field is-grouped">
						<div class="control">
							<input
								id="timeOfReturn"
								v-model="journey.returnJourney.time"
								class="input"
								type="time"
								name="timeOfReturn"
							>
						</div>
						<div class="control">
							<input
								id="dateOfReturn"
								v-model="journey.returnJourney.date"
								class="input"
								type="date"
								name="dateOfReturn"
							>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					&nbsp;
				</div>
				<div class="field-body">
					<div class="field is-grouped">
						<div class="control">
							<button
								class="button is-primary"
								type="button"
								@click="getData"
							>
								Search
							</button>
						</div>
						<div class="control">
							<button
								class="button"
								type="reset"
							>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
const today = new Date();
export default Vue.extend({
	data() {
		return {
			journey: {
				from: {
					location: '',
					date: today.toISOString().slice(0, 10),
					time: today.toISOString().slice(11, 16),
				},
				to: {
					location: '',
				},
				returnJourney: {
					date: today.toISOString().slice(0, 10),
					time: today.toISOString().slice(11, 16),
				},
			},
		};
	},
	methods: {
		async getData() {
			const response = await fetch('http://192.168.1.92:3000/api/', {
				method: 'POST',
				body: JSON.stringify(this.journey),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const txt = await response.text();
			const status = await response.status;
			const statusText = await response.statusText;
			console.log(response);
			console.log(status);
			console.log(statusText);
			console.log(txt);
		},
	},
});
</script>

<style lang="sass" scoped>

</style>