import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
	return (
		<div>
			<h2>I like {name}</h2>
			<h4>{rating}/5.0</h4>
			<img src={picture} alt={name} />
		</div>
	);
}

const foodLike = [
	{
		id: 1,
		name: 'Kimchi',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Korean_Gimchi01.jpg/1200px-Korean_Gimchi01.jpg',
		rating: 5,
	},
	{
		id: 2,
		name: 'Samgyeopsal',
		image:
			'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp',
		rating: 4.9,
	},
	{
		id: 3,
		name: 'Bibimbap',
		image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
		rating: 4.5,
	},
	{
		id: 4,
		name: 'Dongasu',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEGlXYdegamf7pa_mxvqM1lXy3r6xdsw3Xw&s',
		rating: 3.5,
	},
	{
		id: 5,
		name: 'Kimbap',
		image:
			'https://recipe1.ezmember.co.kr/cache/recipe/2022/09/30/8714be7bc9a0ed8525f007521485a80a1.jpg',
		rating: 5.0,
	},
];

function App() {
	return (
		<div>
			{foodLike.map((dish) => (
				<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
			))}
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number,
};
export default App;
