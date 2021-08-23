export default <style>{`

    /*ログイン*/
    .login-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 800px;
    }
    .login-btn {
        width: 500px;
        height: 100px;
        font-size:30pt;
    }
      
   /*ヘッダーのタイトル*/
    .container-title {
        margin:0px 400px;
    }
    .title-size {
        font-size:18pt;
    }
    .top-title {
        color:#4ABDAC;
        font-weight: bold;
        text-shadow: 1px 1px 2px silver;
    }
    /*ヘッダーの個人情報とログアウト*/
    .top-nav {
        font-size:14pt;
        align-items: baseline;
        margin:5px;
    }
    /*ヘッダーのナビゲーションバー*/
    .div-nav {
        background-color: #F78733;
    }
    .base-nav {
        margin:0px 400px 100px 400px;
        font-size:14pt;
    }
    .div-nav .nav-link:hover {
        background-color: #F89042;
        cursor: pointer;
    }
    .nav-tabs .nav-link.active {
        background-color: #F16C09;
    }
    /*トップ画面*/
    .index-box {
        position: relative;
        border-top: solid 3px #4ABDAC;
    }
    .index-box p {
        margin:10px 400px;
        padding: 0;
    }
    .index-box .box-title {
        position: absolute;
        margin:0px 400px;
        display: inline-block;
        top: -27px;
        left: -3px;
        padding: 0 9px;
        height: 25px;
        line-height: 25px;
        font-size: 17px;
        background: #4ABDAC;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px 5px 0 0;
    }
    .modal-group {
        margin:0px 400px 0px 357px;
    }
    .pagination-items {
        margin-left: auto;
        margin-right: auto;
    }
    .list-items {
        border-top: solid 2px #4ABDAC;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .listgroup-color {
        background: #F8F9FA;/*背景色*/        
    }
    .list-color {
        background: #F8F9FA;/*背景色*/
        list-style: none;
        padding: 0.8em;
    }
    .modal-group li + li {
        border-top:1px dotted #666;
    }
    .modal-group li:hover {
        background: #EAEDF0;/*背景色*/
    }
    /*入力フォームの背景色*/
    .children-box {
        font-size: 16px;
        padding: 1.5em 2em;
        margin:100px 400px;
        background: #e4fcff;/*背景色*/
        border-top: solid 6px #4ABDAC;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);/*影*/
    }
    /*保存ボタン*/
    a.btn--orange {
        font-size:18pt;
        color: #fff;
        background-color: #F16C09;
        position: fixed;
        bottom: 50px; 
        right: 450px;
        padding: 6px 40px;
        border: solid 1px #FFFFFF;
    }
    a.btn--orange:hover {
        color: #fff;
        background: #F16C09;
    }
    a.btn--shadow {
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    }
    a.btn--circle {
        border-radius: 50%;
        line-height: 100px;
        width: 100px;
        height: 100px;
        padding: 0;
    }
    
    /*月別入力画面*/
    .monthly-input {
        align-items: center;
    }

    .table-all {
        font-size: 12pt;
        align-items: center;
    }
    .table-all tr td:nth-child(-n+2) {
        text-align: center;
    }
    .table-header {
        background-color: #F89042;
        color: #fff;
        font-size: 12pt;
        text-align: center;
    }
    .table-header tr th:nth-child(-n+2) {
        width:40px;
    }
    .table-header tr th:nth-child(n+3):nth-child(-n+7) {
        width:120px;
    }
    .table-from {
        width: 120px;
        height: 30px;
        font-size:13px;
    }
    .table-text {
        width: 300px;
        height: 30px;
        font-size:13px;
    }
    .table-day{
        padding: 3px 5px;
    }
    .holiday-color {
        background-color: #FFC0CB;
    }
    .holiday-color td:nth-child(-n+2) {
        color: #FF0000;
    }
    .setting-form {
        height: 32px;
        font-size:15px;
    }
    /*社内交通費画面*/
    .traffic-header {
        background-color: #F89042;
        color: #fff;
        font-size: 12pt;
        text-align: center;
    }
    .traffic-day {
        width: 50px;
        height: 30px;
        font-size:13px;
    }
    .traffic-text {
        width: 280px;
        height: 30px;
        font-size:13px;
    }
    .traffic-money {
        width: 120px;
        height: 30px;
        font-size:13px;
    }
    .atd-table td{
        padding:0px 10px 5px ;
    }
    /*勤怠*/
    .alert-form {
        background-color: #FFF0F5;
        color: #FF0000;
        margin-bottom:10px;
    }
    /*課会日程*/
    .table-section {
        width: 300px;
        text-align: center;
    }
    .table-section td {
        padding: 10px 5px;
    }
    /*課会出欠*/
    .sectionade-all {
        font-size: 12pt;
        width: 400px;
    }
    .sectionade-header {
        background-color: #F89042;
        color: #fff;
        text-align: center;
    }
    .sectionade-tr {

    }
    .sectionade-keywidth {
        width: 80px;
        text-align: center;
    }
    .sectionade-namewidth {
        width: 220px;
    }
    .sectionade-selectwidth {
        width: 100px;
        text-align: center;
    }
    footer {
      color:#99c;
      font-size:12pt;
      text-align:right;
      border-bottom:1px solid #99c;
      margin:100px 400px;
      position: relative;
      bottom: 10px;
      right: 10px;
      left: 10px;
    }

`} </style>