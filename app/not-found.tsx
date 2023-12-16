import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFoundPage = () => {
	return (
		<div className='pt-48 text-center'>
			<h1 className='text-6xl font-semibold pb-4'>Pagina pe care o cautati nu exista.</h1>
			<Link href={'/'} className='px-6 py-2 bg-yellow-400 rounded-full font-medium'>
				Inapoi la pagina de inceput
			</Link>
		</div>
	);
};

export default NotFoundPage;
