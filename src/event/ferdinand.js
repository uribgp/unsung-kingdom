export const ferdinand = (scene, fdn) => {
  const state = scene.storage.state.event.m3_1
  fdn.setFaceKey('ferdinand') // Will be deleted
  fdn.setDisplayName('フェルディナンド卿')
  if (state.completed) {
    return fdn.destroy()
  }
  fdn.setTapEvent(async chara => {
    if (state.solved) {
      await scene.talk([
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_1', true)
    } else if (state.started) {
      await scene.talk([
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '大丈夫ですか？顔色が悪いみたいだけど。' },
        { chara, text: '…………。' },
        { chara: 'jaquelyn', text: 'こんな崖のそばにいたら危ないですよ。' },
        { chara, text: '…………。' },
        { chara: 'ann', text: 'ねえ！' }
      ], { angle: false })
      await scene.talk([
        { chara, text: '………、な、なんだ………？' },
        { chara, text: '誰だお前たちは…？' },
        { chara, text: '………、' },
        { chara, text: 'おい、どこだここは！？' },
        { chara: 'ann', text: 'え？' },
        { chara: 'ann', text: '大丈夫？' },
        { chara, text: 'どこなんだここは？' },
        { chara: 'ann', text: 'どこって、墓地ですけど。' },
        { chara, text: '墓地だと？' },
        { chara: 'ann', text: '聖アンテルスの墓地。' },
        { chara, text: 'なんだって…？' },
        { chara, text: 'べリオンじゃないか…。' },
        { chara, text: '私はなぜこんなところに………。' },
        { chara: 'ann', text: 'ほんとに大丈夫？' },
        { chara: 'ann', text: '誰かに連れてこられたの？' },
        { chara, text: 'ち、違う。' },
        { chara, text: '私はまともだ。' },
        { chara, text: 'そうだ、何か用があったはずなんだ。' },
        { chara, text: '声だ！声が聴こえたんだ。' },
        { chara, text: 'それでわざわざここまで来たんだ。' },
        { chara: 'ann', text: 'それで？' },
        { chara, text: 'それで、そうだ、ここでその声を聴いていたんだ。' },
        { chara, text: 'そしたらお前たちが話しかけてきた。' },
        { chara, text: 'おい、ほら、この声だ。聴こえるだろ？' },
        { chara, text: 'こんなに大勢の声が、一体どこから？' },
        { chara: 'ann', text: '何それ、怖い。' },
        { chara: 'ann', text: 'そんなの聞こえないよ。' },
        { chara, text: 'ふざけるな！' },
        { chara, text: 'くそっ！くそっ！' },
        { chara: 'ann', text: 'やっぱり変ですよ。' },
        { chara: 'ann', text: '家に帰ったほうがいいんじゃない？' },
        { chara, text: 'ちくしょう。' },
        { chara, text: '私がこうなったのは全てレンフィールド家のせいだ。' },
        { chara, text: 'きっとレンフィールド家に売りつけられた奴隷や女が俺を恨んでいるんだ。' },
        { chara: 'ann', text: '人を買っていたの？' },
        { chara: 'francisca', text: 'そりゃあ怨みも買うね。' },
        { chara: 'jaquelyn', text: '怨みや呪いだなんて…、' },
        { chara: 'jaquelyn', text: 'きっと自らの罪悪感が生み出した幻覚じゃないかしら。' },
        { chara, text: 'おい！好き勝手言うな。' },
        { chara, text: 'くそ、呪いだかなんだか知らんが、' },
        { chara, text: 'おかげでフェルディナンド家は無茶苦茶だ。' },
        { chara, text: 'おい、あんたら、ここにいるエクトプラズムを退治してくれないか？' },
        { chara, text: 'このまま国に帰ったんじゃ何も解決しない。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_1')
    }
  })
}
