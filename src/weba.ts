import { Config } from './config/Config';
import { ConfigReader } from './config/ConfigReader';

const WEBA_SCRIPT_ID = 'weba-tracker';

let scriptElement: any = document.getElementById(WEBA_SCRIPT_ID),
    configReader: ConfigReader = new ConfigReader(scriptElement),
    config: Config = configReader.read();

console.log(config);