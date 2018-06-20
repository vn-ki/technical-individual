const members = [
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'img/team/matthew.png',
	},
	{
		id: 2,
		name: "beta",
		description: "i am a member of xyz abc",
		img: 'img/team/molly.png',
	},
	{
		id: 1,
		name: "gamma",
		description: "i am a member of xyz abc",
		img: 'img/team/elyse.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'img/team/matthew.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'img/team/matthew.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'img/team/matthew.png',
	}
]


Vue.component('member-component', {
	template: `
			<div class="inline">
				<div class="image">
					<img :src="member.img" alt="images" height="250px" width="250px">
				</div>
				<div class="name">
					<strong>{{member.name}}</strong>
				</div>
				<br class="clearboth" />
			</div>
	`,
	props: {
    member: Object
  }
});

new Vue({
  el: '#app',
  data: {
    members
  }
});