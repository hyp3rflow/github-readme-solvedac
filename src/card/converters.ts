import { TierRank, TierDivision } from '../types';

export const getTierString = (tier: number): string => {
  const tierRankList: TierRank[] = [
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Ruby',
    'Master',
  ];
  const tierDivisionList: TierDivision[] = ['I', 'II', 'III', 'IV', 'V'];

  if (tier) {
    const tierRank = tierRankList[Math.floor((tier - 1) / 5)];
    const tierDivision = tierDivisionList[4 - ((tier - 1) % 5)];

    if (tierRank === 'Master') {
      return tierRank;
    }
    return [tierRank, tierDivision].join(' ');
  }
  return 'Unrated';
};

export const getTierRank = (tier: number): TierRank => {
  const tierRankList: TierRank[] = [
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Ruby',
    'Master',
  ];
  return tier ? tierRankList[Math.floor((tier - 1) / 5)] : 'Unrated';
};
