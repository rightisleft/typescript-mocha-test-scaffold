import axios, {AxiosResponse} from "axios";
import { expect } from 'chai';  // This should be a require in mocharc.yml - not sure why its not working

describe('Basic Test Example', async () => {
    it('should run an arbitrary test', async () => {
        let response: AxiosResponse = await axios.get('https://www.google.com');
        console.log(response.status)
        expect(true).to.be.ok;
    });
});
