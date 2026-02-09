import * as aggregate from './src/aggregate-user-info'
import * as create from './src/create-svg';
import * as template from './src/color-template';
import * as f from './src/file-writer';
import { dummyData } from './spec/dummy-data';

const main = () => {
    const data = dummyData.data;
    if (!data) throw new Error('dummyData.data is undefined');
    (data.user as any).login = "test-user";

    const userInfo = aggregate.aggregateUserInfo(dummyData);
    const settings = template.NormalSettings;

    const svg = create.createSvg(userInfo, settings, false);
    f.writeFile('debug-layout-v2.svg', svg);
    console.log('Generated debug-layout-v2.svg');
}

main();
