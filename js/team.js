const members = [
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
	},
	{
		id: 2,
		name: "beta",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
	},
	{
		id: 1,
		name: "gamma",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
	},
	{
		id: 1,
		name: "alpha",
		description: "i am a member of xyz abc",
		img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
	}
]


Vue.component('member-component', {
	template: `
			<span class="inline">
				<div class="image">
					<img :src="member.img" alt="images" height="200px" width="200px">
				</div>
				<div class="name">
					<strong>{{member.name}}</strong>
				</div>
				<br class="clearboth" />
			</span>
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