import { container } from 'tsyringe';

import IHashprovider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashprovider>('HashProvider', BCryptHashProvider);
