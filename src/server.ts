import mongoose from 'mongoose';
import app from './app';
import config from './config';
import swaggerDocs from './utils/swagger';

async function bootstrap() {
  try {
    await mongoose.connect(config.dbUri as string);
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
      swaggerDocs(app, Number(config.port));
    });
    console.log('Db connected successfully');
  } catch (error) {
    console.log('Failed to connect database', error);
  }
}

bootstrap();
