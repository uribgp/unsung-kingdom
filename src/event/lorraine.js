export const architect = (scene, chara) => {
  chara.setTapEvent(async () => {
    await scene.talk([
      { chara: 'ann', text: '何をしているんですか？' },
      { chara, text: '彫刻の仕掛けを修復しているんだ。' },
      { chara: 'ann', text: '仕掛け？' },
      { chara, text: 'そう。この神殿には色々な仕掛けが隠されている。' },
      { chara, text: '扉を開けたり、閉ざしたり。' },
      { chara: 'ann', text: 'もしかしてこの彫刻を彫った人？' },
      { chara, text: 'いいや、' },
      { chara, text: '僕は仕掛けの部分を直しただけ。' },
      { chara, text: 'なんせこの神殿は、作られたのも、廃墟になったのも遥かに昔のことだ。' },
      { chara, text: '仕掛けを見つけたのも偶然。' },
      { chara: 'ann', text: '偶然？' },
      { chara, text: '初めてここへ来て、このロレイン像に心を奪われて以来、' },
      { chara, text: '僕はこの像のことが忘れられなくなった。' },
      { chara, text: 'やがて彫刻家を目指すことに決めたんだ。' },
      { chara, text: 'それから、食事をとるのも忘れてこの像を眺めた。' },
      { chara: 'ann', text: 'それで仕掛けを見つけたんだね。' },
      { chara, text: 'そう。' },
      { chara, text: '台座に仕掛けが隠されているのを見つけた。' },
      { chara, text: '壊れていたんだけど、それを修理して、また動くようにした。' },
      { chara: 'ann', text: 'すごい。' },
      { chara: 'ann', text: '像の顔も、少し壊れているみたいだけど、それは直さないの？' },
      { chara, text: '直さない。' },
      { chara, text: 'さっき言った通り、この像には心を奪われたんだ。壊れていてもね。' },
      { chara, text: '何より僕はこの像を彫った人を尊敬している。' },
      { chara, text: '僕が手を加えるべきではないんだ。' },
      { chara, text: 'だから、仕掛けだけ動くようにしている。' },
      { chara, text: '何年もかかってしまったけどね。' },
      { chara: 'ann', text: 'そっか。ずっとここで作業しているんだね。' },
      { chara, text: 'ああ。ほとんどの時間をここで過ごしてきた。' },
      { chara: 'ann', text: 'じゃあさ、ドラゴンが目覚めたのも知っていた？' },
      { chara, text: 'もちろん。' },
      { chara, text: 'ドラゴンはこの神殿の地下で眠っていたが、半月ほど前に目覚めた。' },
      { chara, text: 'それから今日までの間は、王弟がドラゴンのもとを頻繁に訪れていたね。' },
      { chara: 'ann', text: 'どうして？' },
      { chara, text: 'ドラゴンの怒りを買っている陛下に代わって、王弟がドラゴンと交渉していたみたいだ。' },
      { chara, text: 'うまくいかなくて、今日に至ったんだろう。' },
      { chara: 'ann', text: 'そうだったんだ。' },
      { chara: 'ann', text: '私たちもドラゴンのところへ行きたいんだけど、' },
      { chara: 'ann', text: '仕掛けを開けてもらえないかな？' },
      { chara, text: '残念だけど、地下への仕掛けだけは僕には動かせない。' },
      { chara, text: 'アレだけちょっと特殊でね、' },
      { chara, text: '騎士団と一緒に来たライラという女性だけが開閉できる。' },
      { chara: 'ann', text: 'そっか…、' },
      { chara, text: '代わりにはならないかもしれないけど、' },
      { chara, text: 'これを。' },
      { chara: 'ann', text: 'これは？' },
      { chara, text: 'これで仕掛けを動かせば、屋上への扉なら開けられる。' },
      { chara, text: '仕掛けの動かし方は、せっかくだから考えてみてくれ。' },
      { chara: 'ann', text: 'ありがとう！' }
    ])
  })
}
