import { faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare, faPython, faReact, faUnity, faFigma, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGamepad, faList, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


export const socialLinks = [
    { icon: faTwitter, url: 'https://twitter.com/just_for_ToB', label: 'Twitter' },
    { icon: faGithub, url: 'https://github.com/Niimijpn', label: 'GitHub' },
    { icon: faEnvelope, url: 'mailto:niimicomputergraphics@gmail.com', label: 'Email' }
];

export const timeline = [
    { id: 1, date: '2003-06-17', title: '誕生', description: '名古屋市で生まれる' },
    { id: 2, date: '2019-04-01', title: '星城高校入学', description: 'カフェ巡りにハマる' },
    { id: 3, date: '2022-04-01', title: '愛知工業大学入学', description: '初めてのプログラミング' },
    { id: 4, date: '2024-03', title: 'フロントエンドに興味を持つ', description: '勉強開始！！' },
    { id: 5, date: '2024-04', title: '友人たちと開発サークルを設立', description: 'Contents Creation Circleを設立' },
];

export const events = [
    { id: 1, title: '東京ゲームショウ2022', description: '「Treaure Surfing」を出展' },
    { id: 2, title: '東京ゲームショウ2023', description: '「キューブでポン！」を出展' },
    { id: 3, title: 'BitSummit2023', description: '「キューブでポン！」を出展' },
    { id: 4, title: 'Civictech Challenge Cup 2023', description: '「ベイベイ」を提案' },
];

export const positions = [
    { id: 1, name: 'Contents Creation Circle　広報幹部', description: 'Contents Creation Circleを設立' },
    { id: 2, name: 'TGS2024出展に向けたクロスメディア戦略プロジェクト　リーダー', description: 'Contents Creation Circleを設立' },
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
        title: '新美のサイト',
        img: '/1.png',
        icon: faFolder,
        description: `ポートフォリオサイト。`,
        gitHubLink: '404',
        label: 'Website',
        skills: [
            <FontAwesomeIcon icon={faReact} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3Alt} />,
            <FontAwesomeIcon icon={faJsSquare} />,
            <Image className='my-1' src='./svg/next.svg' width={50} height={50} alt='next' />,
        ],
    },
    {
        title: '食べログ検索LINEボット',
        img: '/2.png',
        icon: faLine,
        description: `食べログAPIを使用したLINEボット。
        現在地周辺の店舗情報取得やキーワード検索に対応。`,
        gitHubLink: 'https://github.com/Niimijpn/LineBot_Tabelog',
        label: 'LineBOT',
        skills: [
            <FontAwesomeIcon icon={faJsSquare} />,
            <Image className='mt-[-3px]' src='./svg/messagingapi.svg' width={30} height={30} alt='line-messaging-api' />,
            
        ],
    },
    {
        title: 'ARお絵描き',
        img: '/3.png',
        icon: faPencil,
        description: `MediaPipeを使用したお絵描きアプリ。
        画像認識により指の位置情報を取得。
        指をペンと見立てることでお絵描きを実現。
        UNDOや消しゴム、描画色・線の編集機能等も実装。`,
        gitHubLink: 'https://github.com/Niimijpn/gesture',
        label: 'DrawingApp',
        skills: [
            <FontAwesomeIcon icon={faPython} />,
            <Image className='' src='./svg/mediapipe.svg' width={25} height={25} alt='line-messaging-api' />,
        ],
    },
    {
        title: 'サークルのウェブサイト',
        icon: faFolder,
        description: `自身が所属するサークルのウェブサイト。
        入学式に向けてウェブサイトが欲しいと頼まれ、個人で開発。`,
        gitHubLink: 'https://github.com/CC-Circle/ccc-web',
        label: 'Website',
        img: '/4.png',
        skills: [
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3Alt} />,
            <FontAwesomeIcon icon={faJsSquare} />,
            <FontAwesomeIcon icon={faReact} />,
            <Image className='my-2' src='./svg/next.svg' width={50} height={50} alt='next' />,
        ],
    },
    {
        title: 'カンバンリスト',
        icon: faList,
        description: `カンバン式のToDoリスト。
        自分専用のセカンドブレインが欲しくて開発。
        p5.jsで作成した時計やメモスペースも実装。`,
        gitHubLink: 'https://github.com/Niimijpn/kanban',
        label: 'Kanban',
        skills: [
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3Alt} />,
            <FontAwesomeIcon icon={faJsSquare} />,
        ],
    },
    {
        title: 'キューブでポン！',
        icon: faGamepad,
        description: `ルービックキューブがコントローラーの新感覚パズルゲーム。
        ルービックキューブの普及を目的として作成。
        実際のルービックキューブと画面上の色を合わせることでスコアを獲得。
        BitSummit2023，Tokyo Game Show2023に出展．`,
        gitHubLink: '',
        skills: [
            <FontAwesomeIcon icon={faUnity} />,
            <Image className='my-1' src='./svg/c-sharp.svg' width={15} height={15} alt='c#' />,
            <FontAwesomeIcon icon={faFigma} />,
        ],
    },
    {
        title: '天空から目薬',
        icon: faGamepad,
        description: `目薬をコントローラーとしたゲーム。
        「ブラック企業で働く社員の疲れた目を天空から目薬を落として癒やせ！」がコンセプト。
        2024年のサークル勧誘のために制作。`,
        gitHubLink: 'https://github.com/otakumi-bekon/eye_drop',
        label: 'Game',
        skills: [
            <FontAwesomeIcon icon={faUnity} />,
            <Image className='my-1' src='./svg/c-sharp.svg' width={15} height={15} alt='c#' />,
            <FontAwesomeIcon icon={faFigma} />,
        ],
    },
    {
        title: '地球帰還',
        icon: faGamepad,
        description: `スマホのジャイロセンサを使用してプレイヤーを操作するゲーム．
        「宇宙船を操作して地球へ帰還！宇宙空間に散らばる障害物を避けて無事地球に着陸で来るか！」がコンセプト。
        サークルのゴールデンウィーク企画として個人で制作。`,
        gitHubLink: 'https://github.com/CC-Circle/GW2024_Niimi',
        label: 'Game',
        skills: [
            <FontAwesomeIcon icon={faUnity} />,
            <Image className='my-1' src='./svg/c-sharp.svg' width={15} height={15} alt='c#' />,
            <FontAwesomeIcon icon={faFigma} />,
        ],
    },
];