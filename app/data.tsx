import { faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare, faPython, faReact, faUnity, faFigma, faWebAwesome, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGamepad, faLinkSlash, faList, faPencil } from '@fortawesome/free-solid-svg-icons';

export const socialLinks = [
    { icon: faTwitter, url: 'https://twitter.com/just_for_ToB', label: 'Twitter' },
    { icon: faGithub, url: 'https://github.com/Niimijpn', label: 'GitHub' },
    { icon: faEnvelope, url: 'mailto:niimicomputergraphics@gmail.com', label: 'Email' }
];

export const events = [
    { id: 1, date: '2022-04-01', title: '大学入学', description: '愛知工業大学に入学' },
    { id: 2, date: '2022-09-18', title: 'TOKYO GAME SHOW 2022に参加', description: '「Treasure Surfing」を出展' },
    { id: 3, date: '2023-07-16', title: 'BitSummit 2023に参加', description: '「キューブでポン！」を出展' },
    { id: 4, date: '2023-09', title: 'Civictech Challenge Cup 2023に参加', description: '食品ロス削減サービス「ベイベイ」を提案' },
    { id: 5, date: '2023-09-22', title: 'TOKYO GAME SHOW 2023に参加', description: '「キューブでポン！」を出展' },
    { id: 6, date: '2024-04', title: '友人たちと開発サークルを設立', description: 'Contents Creation Circleを設立' },
];

export const skillsIcon = [
    { icon: faHtml5, name: 'HTML' },
    { icon: faCss3Alt, name: 'CSS' },
    { icon: faJsSquare, name: 'JavaScript' },
    { icon: faFigma, name: 'Figma' },
    { icon: faPython, name: 'Python' },
    { icon: faReact, name: 'React' },
    { icon: faUnity, name: 'Unity' },
];


export const projectData = [
    {
        title: '新美のポートフォリオ',
        icon: faFolder,
        description: '新美のポートフォリオサイト．Next.jsを使用．',
        gitHubLink: '',
        label: 'Website'
    },
    {
        title: '食べログ検索LINEボット',
        icon: faLine,
        description: '食べログAPIを使用したLINEボット．現在地周辺の店舗情報取得やキーワード検索に対応．',
        gitHubLink: 'https://github.com/Niimijpn/LineBot_Tabelog',
        label: 'LineBOT'
    },
    {
        title: 'ARお絵描き',
        icon: faPencil,
        description: 'MediaPipeを使用したお絵描きアプリ．画像認識により指の位置情報を取得．指をペンと見立てることでお絵描きを実現．UNDOや消しゴム，描画色・線の編集機能等も実装．',
        gitHubLink: 'https://github.com/Niimijpn/gesture',
        label: 'DrawingApp'
    },
    {
        title: 'カンバンリスト',
        icon: faList,
        description: 'カンバン式のToDoリスト．自分専用のセカンドブレインが欲しくて開発．p5.jsで作成した時計やメモスペースも実装．',
        gitHubLink: 'https://github.com/Niimijpn/kanban',
        label: 'Kanban'
    },
    {
        title: 'Contents Creation Circleのウェブサイト',
        icon: faFolder,
        description: '自身が所属するサークルのウェブサイト．入学式に向けてウェブサイトが欲しいと頼まれ，個人で開発．Next.jsを使用．',
        gitHubLink: 'https://github.com/CC-Circle/ccc-web',
        label: 'Website'
    },
    {
        title: 'キューブでポン！',
        icon: faGamepad,
        description: 'ルービックキューブがコントローラーの新感覚パズルゲーム．ルービックキューブの普及を目的として作成．実際のルービックキューブと画面上の色を合わせることでスコアを獲得．BitSummit2023，Tokyo Game Show2023に出展．',
        gitHubLink: ''
    },
    {
        title: '天空から目薬',
        icon: faGamepad,
        description: '目薬をコントローラーとしたゲーム．「ブラック企業で働く社員の疲れた目を天空から目薬を落として癒やせ！」がコンセプト．2024年のサークル勧誘のために制作．',
        gitHubLink: 'https://github.com/otakumi-bekon/eye_drop',
        label: 'Game'
    },
    {
        title: '地球帰還',
        icon: faGamepad,
        description: 'スマホのジャイロセンサを使用してプレイヤーを操作するゲーム．「宇宙船を操作して地球へ帰還！宇宙空間に散らばる障害物を避けて無事地球に着陸で来るか！」がコンセプト．サークルのゴールデンウィーク企画として個人で制作．',
        gitHubLink: 'https://github.com/CC-Circle/GW2024_Niimi',
        label: 'Game'
    },
];