import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <>
      <h1 className="mt-8 text-base font-bold md:text-2xl">🟢SUCCESS/OK!</h1>
      <div className="mt-4 text-sm md:text-base">
        <div className="mb-4">
          名前は新美舜也です. 興味のあることはWebフロント領域と人工知能です.
          <br />
          強みは気になったらたくさん調べる習性と常に何かに憧れていることです.
          弱みは朝が弱すぎることと, 扁桃腺が腫れやすいことです.
          <br />
          話しかけてみると意外と悪くないやつです.
        </div>
        <ul className="mb-4">
          <li>愛知工業大学コンテンツクリエーションサークル幹部</li>
          <li>
            東京ゲームショウ2024出展に向けたクロスメディア戦略プロジェクト代表
          </li>
        </ul>
        <ul className="mb-4">
          <li>東京ゲームショウ2022 出展「Treasure Surfing」</li>
          <li>東京ゲームショウ2023 出展「キューブでポン！」</li>
          <li>Civitech Challenge Cup2023 参加「べいべい」</li>
          <li>BitSummit2023 出展「キューブでポン！」</li>
        </ul>
      </div>

      <Link href="https://github.com/Niimijpn">
        <h1 className="mt-8 flex w-3/5 items-center rounded-2xl bg-[#eee]	p-2 text-left text-xs font-bold md:w-2/5 md:p-4 md:text-sm">
          <Avatar>
            <AvatarImage src="https://github.com/Niimijpn.png" />
            <AvatarFallback>213</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-col">
            <div className="text-black">@Niimijpn</div>
            <div>on GitHub</div>
          </div>
        </h1>
      </Link>
    </>
  );
}
