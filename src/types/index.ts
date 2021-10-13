interface Organization {
  organizationId: number;
  name: string;
  type: 'community' | 'university' | 'company' | 'high_school';
  rating: number;
  userCount: number;
  voteCount: number;
  solvedCount: number;
  color: string;
}

interface Badge {
  badgeId: string;
  badgeImageUrl: string;
  displayName: string;
  displayDescription: string;
}

interface Background {
  backgroundId: string;
  backgroundImageUrl: string;
  author: string;
  authorUrl: string;
  displayName: string;
  displayDescription: string;
}

export interface UserInformation {
  handle: string;
  bio: string;
  organizations: Organization[];
  badge?: Badge;
  background: Background;
  profileImageUrl: string;
  solvedCount: number;
  voteCount: number;
  exp: number;
  tier: number;
  rating: number;
  ratingByProblemSum: number;
  ratingByClass: number;
  ratingBySolvedCount: number;
  ratingByVoteCount: number;
  class: number;
  classDecoration: 'none' | 'silver' | 'gold';
  rivalCount: number;
  reverseRivalCount: number;
  maxStreak: number;
  rank: number;
  isRival?: boolean;
  isReverseRival?: boolean;
}

export type TierRank =
  | 'Unrated'
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Platinum'
  | 'Diamond'
  | 'Ruby'
  | 'Master';

export type TierDivision = 'I' | 'II' | 'III' | 'IV' | 'V';
