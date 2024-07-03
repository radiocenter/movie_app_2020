import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
	const location = useLocation();
	const navigate = useNavigate();

	console.log(location);
	console.log(navigate);
	useEffect(() => {
		if (location.state === null) {
			navigate('/');
			return null;
		}
	}, []);

	return <span>{location.state.title}</span>;
}
export default Detail;
