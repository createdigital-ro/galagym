import { PropsWithChildren } from 'react';

export const PageTitle = ({ children }: PropsWithChildren) => {
	return <h1 className='text-4xl lg:text-6xl font-bold text-center text-[#0f0f0f] mt-4'>{children}</h1>;
};
