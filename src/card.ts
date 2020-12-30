import fetch from 'node-fetch';
import classSvg from '../assets/classSvg';
import levelSvg from '../assets/levelSvg';

class Card {
  width: number;
  height: number;
  user;

  constructor({ width = 700, height = 150, user }) {
    this.width = width;
    this.height = height;
    this.user = user;
  }

  render() {
    const prefix = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby'];
    const roman = ['I', 'II', 'III', 'IV', 'V'];

    const {
      user_id,
      bio,
      level,
      rank,
      solved,
      class: classNumber,
      exp,
      previous_exp_cap,
      next_exp_cap,
    } = this.user;

    const level_string =
      level > 0
        ? `${prefix[Math.floor((level - 1) / 5)]} ${
            roman[4 - ((level - 1) % 5)]
          }`
        : 'Unrated';
    const current_exp = exp - previous_exp_cap;
    const current_cap = next_exp_cap - previous_exp_cap;
    const progress = current_exp / current_cap;

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


        .rank {
          color: rgb(39, 226, 164);
          font-weight: 700;
          font-size: 24px;
        }

        .exp-progress {
          color: rgb(138, 143, 149);
          font-weight: 400;
          font-size: 14px;
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
        }

        .item-number {
          font-weight: 600;
          font-size: 22px;
          text-align: right;
        }

        .bronze{
          color: #ad5600;
        }
        .silver{
          color: #435f7a;
        }
        .gold{
          color: #ec9a00;
        }
        .platinum{
          color: #27e2a4;
        }
        .diamond{
          color: #00b4fc;
        }
        .ruby{
          color: #ff0062;
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
      </style>
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
          level > 0
            ? prefix[Math.floor((level - 1) / 5)].toLowerCase() + '-filter'
            : 'unrated-filter'
        }" width="300" height="300" x="8" y="5">
          ${levelSvg[level]}
        </foreignObject>
        <text x="105" y="20.5" class="header">${user_id}</text>
        <g transform="translate(105, 28)">
          <foreignObject width="400" height="100">
            <xhtml:span class="bio">
              ${bio}
            </xhtml:span>
          </foreignObject>
        </g>
      </g>

      <g transform="translate(125, 80)">
        <foreignObject width="300" height="300">
          <xhtml:div class="rank ${
            level > 0
              ? prefix[Math.floor((level - 1) / 5)].toLowerCase()
              : 'unrated'
          }">${level_string}</xhtml:div>
          <xhtml:div class="exp-progress">${current_exp.toLocaleString()} / ${current_cap.toLocaleString()}</xhtml:div>
        </foreignObject>

        <foreignObject width="300" height="300" x="305" y="3">
          <xhtml:div class="flex-row box">
            <xhtml:div class="item-box box">
              <xhtml:div class="item-title">전체 랭킹</xhtml:div>
              <xhtml:div class="item-number">${rank}</xhtml:div>
            </xhtml:div>
            <xhtml:div class="item-box box">
              <xhtml:div class="item-title">문제 해결 수</xhtml:div>
              <xhtml:div class="item-number">${solved}</xhtml:div>
            </xhtml:div>
          </xhtml:div>
        </foreignObject>
      </g>

      <g class="badge" data-testid="card-badge" transform="translate(585, 10)">
        <foreignObject width="55" height="55" x="50">
          ${classSvg[classNumber]}
        </foreignObject>
      </g>
      </svg>`;
  }
}

export default Card;
