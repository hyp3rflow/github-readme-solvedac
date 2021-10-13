import classSvg from '../../assets/classSvg';
import tierSvg from '../../assets/tierSvg';
import { UserInformation } from '../types';
import { getTierRank, getTierString } from './converters';
import { getGlobalStyle, getMasterGradient } from './templates';

interface CardBuilderProps {
  width?: number;
  height?: number;
  data: UserInformation;
}

class CardBuilder {
  private width = 700;
  private height = 150;
  private data: UserInformation;

  constructor({ width = 700, height = 150, data }: CardBuilderProps) {
    this.width = width;
    this.height = height;
    this.data = data;
  }

  render() {
    const {
      handle,
      bio,
      tier,
      rank,
      solvedCount,
      class: classNumber,
      badge,
      rating,
    } = this.data;

    const tierString = getTierString(tier);
    const tierRank = getTierRank(tier).toLowerCase();
    const getTierSvg = (tier: number) => tierSvg[tier];
    const getClassSvg = (classNumber: number) => classSvg[classNumber];
    const badgeImageUrl = badge?.badgeImageUrl;

    return `<svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
      >
      ${getGlobalStyle()}
      ${getMasterGradient()}
      <rect
        data-testid="card-bg"
        x="0.5"
        y="0.5"
        rx="4.5"
        height="99%"
        stroke="#E4E2E2"
        width="699"
        fill="#FFFEFE"
      />
      <g class="profile" data-testid="card-title" transform="translate(20, 20)">
        <foreignObject class="profile-image ${tierRank}-filter" width="300" height="300" x="8" y="5">
          ${getTierSvg(tier)}
        </foreignObject>
        <text x="105" y="20.5" class="header">${handle}</text>
        <g transform="translate(105, 28)">
          <foreignObject width="400" height="100">
            <xhtml:span class="bio">
              ${bio}
            </xhtml:span>
          </foreignObject>
        </g>
      </g>

      <g transform="translate(125, 80)">
        <text dy="30" class="rating ${tierRank}">${rating}</text>
        <text dy="50" class="rank ${tierRank}">${tierString}</text>
        <foreignObject width="300" height="300" x="305" y="3">
          <xhtml:div class="flex-row box">
            <xhtml:div class="item-box box">
              <xhtml:div class="item-title">전체 랭킹</xhtml:div>
              <xhtml:div class="item-number">${rank}</xhtml:div>
            </xhtml:div>
            <xhtml:div class="item-box box">
              <xhtml:div class="item-title">문제 해결 수</xhtml:div>
              <xhtml:div class="item-number">${solvedCount}</xhtml:div>
            </xhtml:div>
          </xhtml:div>
        </foreignObject>
      </g>

      <g class="badge" data-testid="card-badge" transform="translate(585, 10)">
        <foreignObject width="55" height="55" x="50">
          ${getClassSvg(classNumber)}
        </foreignObject>
        ${
          badgeImageUrl &&
          `<image href="${badgeImageUrl}" width="45" height="45" y="5"/>`
        }
      </g>
    </svg>`;
  }
}

export default CardBuilder;
