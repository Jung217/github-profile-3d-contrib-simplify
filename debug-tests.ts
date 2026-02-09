import * as aggregate from './src/aggregate-user-info'
import { dummyData } from './spec/dummy-data';

try {
    const userInfo = aggregate.aggregateUserInfo(dummyData);
    console.log('User info aggregated successfully');
    console.log('Contribution calendar length:', userInfo.contributionCalendar.length);
    console.log('Total contributions:', userInfo.totalContributions);
} catch (error) {
    console.error('Error aggregating user info:', error);
}
