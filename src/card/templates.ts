export const getGlobalStyle = () => `
  <style>
    * {
      font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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

    .bronze {
      fill: #ad5600;
    }
    .silver {
      fill: #435f7a;
    }
    .gold {
      fill: #ec9a00;
    }
    .platinum {
      fill: #27e2a4;
    }
    .diamond {
      fill: #00b4fc;
    }
    .ruby {
      fill: #ff0062;
    }
    .master {  
      fill: url(#gr-master);
    }

    .unrated-filter {
      filter: drop-shadow(rgba(45, 45, 45, 0.6) 0px 4px 8px);
    }

    .bronze-filter {
      filter: drop-shadow(rgba(181, 93, 10, 0.6) 0px 4px 8px);
    }
    .silver-filter {
      filter: drop-shadow(rgba(78, 106, 134, 0.6) 0px 4px 8px);
    }
    .gold-filter {
      filter: drop-shadow(rgba(255, 176, 40, 0.6) 0px 4px 8px);
    }
    .platinum-filter {
      filter: drop-shadow(rgba(0, 212, 151, 0.6) 0px 4px 8px);
    }
    .diamond-filter {
      filter: drop-shadow(rgba(65, 202, 255, 0.6) 0px 4px 8px);
    }
    .ruby-filter {
      filter: drop-shadow(rgba(255, 48, 113, 0.6) 0px 4px 8px);
    }
    .master-filter {
      filter: drop-shadow(rgba(179, 0, 224, 0.6) 0px 4px 8px);
    }
  </style>
</defs>`;

export const getMasterGradient = (
  id = 'gr-master'
) => `<linearGradient id="${id}" x1="0" y1="0" x2="80%" y2="100%">
  <stop stop-color="rgb(255, 124, 168)" offset="0%"/>
  <stop stop-color="rgb(180, 145, 255)" offset="50%"/>
  <stop stop-color="rgb(124, 249, 255)" offset="100%"/>
</linearGradient>`;
