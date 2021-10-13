import classSvg from '../assets/classSvg';
import levelSvg from '../assets/levelSvg';

class Card {
  width: number;
  height: number;
  data;

  constructor({ width = 700, height = 150, data }) {
    this.width = width;
    this.height = height;
    this.data = data;
  }

  render() {
    const prefix = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby', 'Master'];
    const roman = ['I', 'II', 'III', 'IV', 'V'];

    const {
      handle,
      bio,
      tier,
      rank,
      solvedCount,
      class: classNumber,
      profileImageUrl,
      badge,
      exp,
      rating,
    } = this.data;
    const badgeImageUrl = badge?.badgeImageUrl;

    const tierString = (() => {
      if(tier) {
        const tierPrefix = prefix[Math.floor((tier - 1) / 5)];
        const tierDivision = roman[4 - ((tier - 1) % 5)];

        if(tierPrefix === 'Master') {
          return tierPrefix;
        }
        return [tierPrefix, tierDivision].join(' ');
      }
      return 'Unrated';
    })();

    return `<svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
      >
        <style>
        @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&amp;display=swap');

        * {
          font-family: 'Inter', 'Noto Sans KR', sans-serif;
          margin: 0;
        }

        text {
          fill: black;
        }

        .profile-image {
          filter: drop-shadow(rgba(0, 212, 151, 0.6) 0px 4px 8px);
        }

        .header {
          font-weight: 700;
          font-size: 20px;
        }

        .bio {
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          width: 400px;
          height: 30px;
          white-space: nowrap;
        }


        .rating {
          color: rgb(39, 226, 164);
          font-weight: 700;
          font-size: 24px;
        }

        .rank {
          color: rgb(138, 143, 149);
          font-weight: 700;
          font-size: 16px;
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          width: 250px;
          height: 50px;

          justify-content: flex-end;
        }

        .item-box {
          margin-left: 12px;
          padding-right: 10px;
          border-right: 1px solid black;
        }

        .item-title {
          font-weight: 400;
          font-size: 16px;
          text-align: right;
        }

        .item-number {
          font-weight: 600;
          font-size: 22px;
          text-align: right;
        }

        .bronze{
          fill: #ad5600;
        }
        .silver{
          fill: #435f7a;
        }
        .gold{
          fill: #ec9a00;
        }
        .platinum{
          fill: #27e2a4;
        }
        .diamond{
          fill: #00b4fc;
        }
        .ruby{
          fill: #ff0062;
        }
        .master{  
          fill: url(#gr-master);
        }

        .unrated-filter {
          filter: drop-shadow(rgba(45, 45, 45, 0.6) 0px 4px 8px);
        }

        .bronze-filter{
          filter: drop-shadow(rgba(181, 93, 10, 0.6) 0px 4px 8px);
        }
        .silver-filter{
          filter: drop-shadow(rgba(78, 106, 134, 0.6) 0px 4px 8px);
        }
        .gold-filter{
          filter: drop-shadow(rgba(255, 176, 40, 0.6) 0px 4px 8px);
        }
        .platinum-filter{
          filter: drop-shadow(rgba(0, 212, 151, 0.6) 0px 4px 8px);
        }
        .diamond-filter{
          filter: drop-shadow(rgba(65, 202, 255, 0.6) 0px 4px 8px);
        }
        .ruby-filter{
          filter: drop-shadow(rgba(255, 48, 113, 0.6) 0px 4px 8px);
        }
        .master-filter{
          filter: drop-shadow(rgba(179, 0, 224, 0.6) 0px 4px 8px);
        }
      </style>
      <linearGradient id="gr-master" x1="0" y1="0" x2="80%" y2="100%">
        <stop stop-color="rgb(255, 124, 168)" offset="0%"/>
        <stop stop-color="rgb(180, 145, 255)" offset="50%"/>
        <stop stop-color="rgb(124, 249, 255)" offset="100%"/>
      </linearGradient>
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
        <foreignObject class="profile-image ${
          tier > 0
            ? prefix[Math.floor((tier - 1) / 5)].toLowerCase() + '-filter'
            : 'unrated-filter'
        }" width="300" height="300" x="8" y="5">
          ${levelSvg[tier]}
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
      <text dy="30" class="rating ${
        tier > 0
          ? prefix[Math.floor((tier - 1) / 5)].toLowerCase()
          : 'unrated'
      }">${rating}</text>
          <text dy="50" class="rank ${
            tier > 0
              ? prefix[Math.floor((tier - 1) / 5)].toLowerCase()
              : 'unrated'
          }">${tierString}</text>

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
          ${classSvg[classNumber]}
        </foreignObject>
        ${badgeImageUrl && `<image href="${badgeImageUrl}" width="45" height="45" y="5"/>`}
      </g>
      </svg>`;
  }
}

export default Card;
