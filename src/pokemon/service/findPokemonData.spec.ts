import { findPokemonData } from "./findPokemonData";

describe.each([
  ["ニャオハ", ""],
  ["ニャローテ", ""],
  ["マスカーニャ", ""],
  ["ホゲータ", ""],
  ["アチゲータ", ""],
  ["ラウドボーン", ""],
  ["クワッス", ""],
  ["ウェルカモ", ""],
  ["ウェーニバル", ""],
  ["グルトン", ""],
  ["パフュートン", ""],
  ["パフュートン", ""],
  ["タマンチュラ", ""],
  ["ワナイダー", ""],
  ["マメバッタ", ""],
  ["エクスレッグ", ""],
  ["ハネッコ", ""],
  ["ポポッコ", ""],
  ["ワタッコ", ""],
  ["ヤヤコマ", ""],
  ["ヒノヤコマ", ""],
  ["ファイアロー", ""],
  ["パモ", ""],
  ["パモット", ""],
  ["パーモット", ""],
  ["デルビル", ""],
  ["ヘルガー", ""],
  ["ヤングース", ""],
  ["デカグース", ""],
  ["ホシガリス", ""],
  ["ヨクバリス", ""],
  ["ヒマナッツ", ""],
  ["キマワリ", ""],
  ["コロボーシ", ""],
  ["コロトック", ""],
  ["コフキムシ", ""],
  ["コフーライ", ""],
  ["ビビヨン", ""],
  ["ミツハニー", ""],
  ["ビークイン", ""],
  ["ココガラ", ""],
  ["アオガラス", ""],
  ["アーマーガア", ""],
  ["ピンプク", ""],
  ["ラッキー", ""],
  ["ハピナス", ""],
  ["ルリリ", ""],
  ["マリル", ""],
  ["マリルリ", ""],
  ["アメタマ", ""],
  ["アメモース", ""],
  ["ブイゼル", ""],
  ["フローゼル", ""],
  ["ウパー(パルデア)", ""],
  ["ドオー", ""],
  ["コダック", ""],
  ["ゴルダック", ""],
  ["カムカメ", ""],
  ["カジリガメ", ""],
  ["ププリン", ""],
  ["プリン", ""],
  ["プクリン", ""],
  ["ラルトス", ""],
  ["キルリア", ""],
  ["サーナイト", ""],
  ["エルレイド", ""],
  ["スリープ", ""],
  ["スリーパー", ""],
  ["ゴース", ""],
  ["ゴースト", ""],
  ["ゲンガー", ""],
  ["ワッカネズミ", ""],
  ["イッカネズミ", ""],
  ["ピチュー", ""],
  ["ピカチュウ", ""],
  ["ライチュウ", ""],
  ["パピモッチ", ""],
  ["バウッツェル", ""],
  ["ナマケロ", ""],
  ["ヤルキモノ", ""],
  ["ケッキング", ""],
  ["アマカジ", ""],
  ["アママイコ", ""],
  ["アマージョ", ""],
  ["ミニーブ", ""],
  ["オリーニョ", ""],
  ["オリーヴァ", ""],
  ["ウソハチ", ""],
  ["ウソッキー", ""],
  ["イワンコ", ""],
  ["ルガルガン", ""],
  ["ルガルガン", ""],
  ["ルガルガン", ""],
  ["タンドン", ""],
  ["トロッゴン", ""],
  ["セキタンザン", ""],
  ["コリンク", ""],
  ["ルクシオ", ""],
  ["レントラー", ""],
  ["ムックル", ""],
  ["ムクバード", ""],
  ["ムクホーク", ""],
  ["オドリドリ", ""],
  ["オドリドリ", ""],
  ["オドリドリ", ""],
  ["オドリドリ", ""],
  ["メリープ", ""],
  ["モココ", ""],
  ["デンリュウ", ""],
  ["チュリネ", ""],
  ["ドレディア", ""],
  ["キノココ", ""],
  ["キノガッサ", ""],
  ["カジッチュ", ""],
  ["アップリュー", ""],
  ["タルップル", ""],
  ["バネブー", ""],
  ["ブーピッグ", ""],
  ["イキリンコ", ""],
  ["イキリンコ", ""],
  ["イキリンコ", ""],
  ["イキリンコ", ""],
  ["ムウマ", ""],
  ["ムウマージ", ""],
  ["マクノシタ", ""],
  ["ハリテヤマ", ""],
  ["マケンカニ", ""],
  ["ケケンカニ", ""],
  ["ヤトウモリ", ""],
  ["エンニュート", ""],
  ["ゴマゾウ", ""],
  ["ドンファン", ""],
  ["ゾウドウ", ""],
  ["ダイオウドウ", ""],
  ["フカマル", ""],
  ["ガバイト", ""],
  ["ガブリアス", ""],
  ["コジオ", ""],
  ["ジオヅム", ""],
  ["キョジオーン", ""],
  ["キャモメ", ""],
  ["ペリッパー", ""],
  ["コイキング", ""],
  ["ギャラドス", ""],
  ["サシカマス", ""],
  ["カマスジョー", ""],
  ["バスラオ", ""],
  ["バスラオ", ""],
  ["ゴクリン", ""],
  ["マルノーム", ""],
  ["ニャース", ""],
  ["ペルシアン", ""],
  ["フワンテ", ""],
  ["フワライド", ""],
  ["フラベベ", ""],
  ["フラベベ", ""],
  ["フラベベ", ""],
  ["フラベベ", ""],
  ["フラベベ", ""],
  ["フラエッテ", ""],
  ["フラエッテ", ""],
  ["フラエッテ", ""],
  ["フラエッテ", ""],
  ["フラエッテ", ""],
  ["フラージェス", ""],
  ["フラージェス", ""],
  ["フラージェス", ""],
  ["フラージェス", ""],
  ["フラージェス", ""],
  ["ディグダ", ""],
  ["ダグトリオ", ""],
  ["コータス", ""],
  ["ドンメル", ""],
  ["バクーダ", ""],
  ["ドーミラー", ""],
  ["ドータクン", ""],
  ["キバゴ", ""],
  ["オノンド", ""],
  ["オノノクス", ""],
  ["マンキー", ""],
  ["オコリザル", ""],
  ["コノヨザル", ""],
  ["アサナン", ""],
  ["チャーレム", ""],
  ["リオル", ""],
  ["ルカリオ", ""],
  ["カルボウ", ""],
  ["グレンアルマ", ""],
  ["ソウブレイズ", ""],
  ["ドジョッチ", ""],
  ["ナマズン", ""],
  ["ズピカ", ""],
  ["ハラバリー", ""],
  ["ヌメラ", ""],
  ["ヌメイル", ""],
  ["ヌメルゴン", ""],
  ["グレッグル", ""],
  ["ドクロッグ", ""],
  ["カイデン", ""],
  ["タイカイデン", ""],
  ["イーブイ", ""],
  ["シャワーズ", ""],
  ["サンダース", ""],
  ["ブースター", ""],
  ["エーフィ", ""],
  ["ブラッキー", ""],
  ["リーフィア", ""],
  ["グレイシア", ""],
  ["ニンフィア", ""],
  ["ノコッチ", ""],
  ["ノココッチ", ""],
  ["シキジカ", ""],
  ["シキジカ", ""],
  ["シキジカ", ""],
  ["シキジカ", ""],
  ["メブキジカ", ""],
  ["メブキジカ", ""],
  ["メブキジカ", ""],
  ["メブキジカ", ""],
  ["キリンリキ", ""],
  ["リキキリン", ""],
  ["ベトベター", ""],
  ["ベトベトン", ""],
  ["オラチフ", ""],
  ["マフィティフ", ""],
  ["エレズン", ""],
  ["ストリンダー", ""],
  ["ストリンダー", ""],
  ["デデンネ", ""],
  ["パチリス", ""],
  ["シルシュルー", ""],
  ["タギングル", ""],
  ["オドシシ", ""],
  ["タマゲタケ", ""],
  ["モロバレル", ""],
  ["ビリリダマ", ""],
  ["マルマイン", ""],
  ["コイル", ""],
  ["レアコイル", ""],
  ["ジバコイル", ""],
  ["メタモン", ""],
  ["ガーディ", ""],
  ["ウインディ", ""],
  ["ヒメグマ", ""],
  ["リングマ", ""],
  ["ザングース", ""],
  ["ハブネーク", ""],
  ["チルット", ""],
  ["チルタリス", ""],
  ["メェークル", ""],
  ["ゴーゴート", ""],
  ["ケンタロス", ""],
  ["ケンタロス(炎)", ""],
  ["ケンタロス(水)", ""],
  ["シシコ", ""],
  ["カエンジシ", ""],
  ["スカンプー", ""],
  ["スカタンク", ""],
  ["ゾロア", ""],
  ["ゾロアーク", ""],
  ["ニューラ", ""],
  ["マニューラ", ""],
  ["ヤミカラス", ""],
  ["ドンカラス", ""],
  ["ゴチム", ""],
  ["ゴチミル", ""],
  ["ゴチルゼル", ""],
  ["ヤバチャ", ""],
  ["ポットデス", ""],
  ["ミミッキュ", ""],
  ["クレッフィ", ""],
  ["イエッサン", ""],
  ["イエッサン", ""],
  ["アノクサ", ""],
  ["アノホラグサ", ""],
  ["ノノクラゲ", ""],
  ["リククラゲ", ""],
  ["トロピウス", ""],
  ["カリキリ", ""],
  ["ラランテス", ""],
  ["ガケガニ", ""],
  ["カプサイジ", ""],
  ["スコヴィラン", ""],
  ["サボネア", ""],
  ["ノクタス", ""],
  ["シガロコ", ""],
  ["ベラカス", ""],
  ["コンパン", ""],
  ["モルフォン", ""],
  ["クヌギダマ", ""],
  ["フォレトス", ""],
  ["ストライク", ""],
  ["ハッサム", ""],
  ["ヘラクロス", ""],
  ["ヒラヒナ", ""],
  ["クエスパトラ", ""],
  ["ヒポポタス", ""],
  ["カバルドン", ""],
  ["メグロコ", ""],
  ["ワルビル", ""],
  ["ワルビアル", ""],
  ["スナヘビ", ""],
  ["サダイジャ", ""],
  ["ドロバンコ", ""],
  ["バンバドロ", ""],
  ["メラルバ", ""],
  ["ウルガモス", ""],
  ["タツベイ", ""],
  ["コモルー", ""],
  ["ボーマンダ", ""],
  ["カヌチャン", ""],
  ["ナカヌチャン", ""],
  ["デカヌチャン", ""],
  ["ミブリム", ""],
  ["テブリム", ""],
  ["ブリムオン", ""],
  ["ベロバー", ""],
  ["ギモー", ""],
  ["オーロンゲ", ""],
  ["ウミディグダ", ""],
  ["ウミトリオ", ""],
  ["オトシドリ", ""],
  ["ナミイルカ", ""],
  ["イルカマン", ""],
  ["イルカマン", ""],
  ["ブロロン", ""],
  ["ブロロローム", ""],
  ["モトトカゲ", ""],
  ["ミミズズ", ""],
  ["ヤミラミ", ""],
  ["カゲボウズ", ""],
  ["ジュペッタ", ""],
  ["タイレーツ", ""],
  ["ルチャブル", ""],
  ["ミカルゲ", ""],
  ["オンバット", ""],
  ["オンバーン", ""],
  ["ドラメシヤ", ""],
  ["ドロンチ", ""],
  ["ドラパルト", ""],
  ["キラーメ", ""],
  ["キラフロル", ""],
  ["ロトム", ""],
  ["ロトム", ""],
  ["ロトム", ""],
  ["ロトム", ""],
  ["ロトム", ""],
  ["ロトム", ""],
  ["ボチ", ""],
  ["ハカドッグ", ""],
  ["ヤレユータン", ""],
  ["ナゲツケサル", ""],
  ["ネッコアラ", ""],
  ["ヨーギラス", ""],
  ["サナギラス", ""],
  ["バンギラス", ""],
  ["イシヘンジン", ""],
  ["コオリッポ", ""],
  ["コオリッポ", ""],
  ["バチンウニ", ""],
  ["スナバァ", ""],
  ["シロデスナ", ""],
  ["ヤドン", ""],
  ["ヤドラン", ""],
  ["ヤドキング", ""],
  ["カラナクシ", ""],
  ["カラナクシ", ""],
  ["トリトドン", ""],
  ["トリトドン", ""],
  ["シェルダー", ""],
  ["パルシェン", ""],
  ["ハリーセン", ""],
  ["ラブカス", ""],
  ["ケイコウオ", ""],
  ["ネオラント", ""],
  ["ハギギシリ", ""],
  ["ママンボウ", ""],
  ["クズモー", ""],
  ["ドラミドロ", ""],
  ["ウデッポウ", ""],
  ["ブロスター", ""],
  ["シビシラス", ""],
  ["シビビール", ""],
  ["シビルドン", ""],
  ["ヒドイデ", ""],
  ["ドヒドイデ", ""],
  ["カラミンゴ", ""],
  ["ミニリュウ", ""],
  ["ハクリュー", ""],
  ["カイリュー", ""],
  ["ユキハミ", ""],
  ["モスノウ", ""],
  ["ユキカブリ", ""],
  ["ユキノオー", ""],
  ["デリバード", ""],
  ["クマシュン", ""],
  ["ツンベアー", ""],
  ["ユキワラシ", ""],
  ["オニゴーリ", ""],
  ["ユキメノコ", ""],
  ["フリージオ", ""],
  ["アルクジラ", ""],
  ["ハルクジラ", ""],
  ["カチコール", ""],
  ["クレベース", ""],
  ["ワシボン", ""],
  ["ウォーグル", ""],
  ["コマタナ", ""],
  ["キリキザン", ""],
  ["ドドゲザン", ""],
  ["モノズ", ""],
  ["ジヘッド", ""],
  ["サザンドラ", ""],
  ["ミガルーサ", ""],
  ["ヘイラッシャ", ""],
  ["シャリタツ", ""],
  ["シャリタツ", ""],
  ["イダイナキバ", ""],
  ["サケブシッポ", ""],
  ["アラブルタケ", ""],
  ["ハバタクカミ", ""],
  ["チヲハウハネ", ""],
  ["スナノケガワ", ""],
  ["テツノワダチ", ""],
  ["テツノツツミ", ""],
  ["テツノカイナ", ""],
  ["テツノコウベ", ""],
  ["テツノドクガ", ""],
  ["テツノイバラ", ""],
  ["セビエ", ""],
  ["セゴール", ""],
  ["セグレイブ", ""],
  ["コレクレー", ""],
  ["サーフゴー", ""],
  ["チオンジェン", ""],
  ["パオジアン", ""],
  ["ディンルー", ""],
  ["イーユイ", ""],
  ["トドロクツキ", ""],
  ["テツノブジン", ""],
  ["コライドン", ""],
  ["ミライドン", ""],
  ["ガラルニャース", ""],
  ["ニャイキング", ""],
  ["ウパー", ""],
  ["ヌオー", ""],
  ["ヒトカゲ", ""],
  ["リザード", ""],
  ["リザードン", ""],
  ["ヒバニー", ""],
  ["ラビフット", ""],
  ["エースバーン", ""],
])("findPokemonData", (pokemonName) => {
  test(`入力が「${pokemonName}」であるとき、${pokemonName}のデータが返ること`, () => {
    expect(findPokemonData(pokemonName)).toEqual(
      expect.objectContaining({ name: pokemonName })
    );
  });
});

test("実装されていないポケモンの名前が入力された場合,nullが返ること", () => {
  expect(findPokemonData("カメックス")).toBe(null);
});
