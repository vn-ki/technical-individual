const members = [
  {
    id: 1,
    name: "alpha",
    description: "Competitive Coding",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "First Year"
  },
  {
    id: 2,
    name: "beta",
    description: "Competitive Coding",
    img: "img/team/molly.png",
    contact: "9999999999",
    year: "Second Year"
  },
  {
    id: 1,
    name: "gamma",
    description: "Development",
    img: "img/team/elyse.png",
    contact: "9999999999",
    year: "Second Year"
  },
  {
    id: 1,
    name: "alpha",
    description: "Cyber Security",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "Third Year"
  },
  {
    id: 1,
    name: "alpha",
    description: "Cyber Security",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "First Year"
  },
  {
    id: 1,
    name: "alpha",
    description: "Development",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "First Year"
  }
];

const heads = [
  {
    id: 1,
    name: "alpha",
    description: "Club Head",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "Third Year"
  },
  {
    id: 2,
    name: "beta",
    description: "Club Head",
    img: "img/team/molly.png",
    contact: "9999999999",
    year: "Third Year"
  }
];

Vue.component("member-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="member.img" alt="Card image cap">
			</div>
  			<div class="card-body">
    			<h5 class="card-title">{{member.name}}</h5>
				  <p class="card-text">{{member.description}}</p>
				  <p class="card-text mb-2">{{member.year}}</p>
    			<a href="#"><i class="fab fa-github"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="head.img" alt="Card image cap">
			</div>
  			<div class="card-body">
	    		<h5 class="card-title">{{head.name}}</h5>
				  <p class="card-text">{{head.description}}</p>
				  <p class="card-text mb-2">{{head.year}}</p>
    			<a href="#"><i class="fab fa-github"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
