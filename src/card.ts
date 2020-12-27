import { profile } from 'console';

class Card {
  width: number;
  height: number;
  css: string;
  user;

  constructor({ width = 495, height = 100, user }) {
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
      badge: { url: badge_url },
      profile_image_url,
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
      >
        <style>
        @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Inter', 'Noto Sans KR', sans-serif;
        }

        text {
          fill: black;
        }

        .profile-image {
          border-radius: 50%;

          position: absolute;
          left: 20px;
          top: 20px;
        }

        .header {
          font-weight: 700;
          font-size: 18px;
        }

        .bio {
          font-size: 11px;
        }

        .rank {
          font-weight: 700;
          font-size: 14px;
        }

        .exp-progress {
          color: rgb(138, 143, 149);
          font-weight: 400;
          font-size: 10px;
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          width: 235px;
          height: 50px;

          justify-content: flex-end;
        }

        .item-box {
          margin-left: 12px;
          padding-right: 5px;
          border-right: 1px solid black;
        }

        .item-title {
          font-weight: 400;
          font-size: 11px;
        }

        .item-number {
          font-weight: 600;
          font-size: 14px;
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
        width="494"
        fill="#FFFEFE"
      />
      <g class="profile" data-testid="card-title" transform="translate(15, 15)">
        <foreignObject width="100" height="100" x="-20" y="-20">
          <img class="profile-image ${
            level > 0
              ? prefix[Math.floor((level - 1) / 5)].toLowerCase() + '-filter'
              : 'unrated-filter'
          }" width=65" height="65"
          src="${profile_image_url}"
          />
        </foreignObject>
        <foreignObject width="35" height="35" x="35" y="45">
          <img
            width="32"
            height="32"
            src="https://static.solved.ac/tier_small/${level}.svg"
          />
        </foreignObject>
        <text x="80" y="18.5" class="header">${user_id}</text>
        <text x="80" y="35.5" class="bio">
          ${bio}
        </text>
      </g>

      <g transform="translate(95, 60)">
        <foreignObject width="300" height="300">
          <div class="rank ${
            level > 0
              ? prefix[Math.floor((level - 1) / 5)].toLowerCase()
              : 'unrated'
          }">${level_string}</div>
          <div class="exp-progress">${current_exp} / ${current_cap}</div>
        </foreignObject>

        <foreignObject width="300" height="300" x="155" y="-2">
          <div class="flex-row box">
            <div class="item-box box">
              <div class="item-title">전체 랭킹</div>
              <div class="item-number">${rank}</div>
            </div>
            <div class="item-box box">
              <div class="item-title">문제 해결 수</div>
              <div class="item-number">${solved}</div>
            </div>
          </div>
        </foreignObject>
      </g>

      <g class="badge" data-testid="card-badge" transform="translate(405, 10)">
        <foreignObject width="30" height="30" y="5">
          <img
            width="30"
            height="30"
            src="${badge_url}"
          />
        </foreignObject>
        <foreignObject width="40" height="40" x="40">
          <img
            width="40"
            height="40"
            src="https://static.solved.ac/class/c${classNumber}.svg"
          />
        </foreignObject>
      </g>
      </svg>`;
  }
}

export default Card;
