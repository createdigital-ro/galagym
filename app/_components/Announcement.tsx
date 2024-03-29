import Link from 'next/link';

type AnnouncementType = {
	message: string;
	link?: string;
};

const Announcement = ({ message, link }: AnnouncementType) => {
	return (
		<div className='w-full text-md bg-yellow-400 py-1 font-semibold text-center uppercase'>
			<p>{message}</p>
		</div>
	);
};

export default Announcement;
