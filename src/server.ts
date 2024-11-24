import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

const main = async () => {
	try {
		await mongoose.connect(config.database_url as string);

		// Server
		app.listen(config.port || 3000, () => {
			console.log(
				`Example Server is running on http://localhost:${config.port}`,
			);
		});
	} catch (error) {
		console.log(error);
	}
};
main();
