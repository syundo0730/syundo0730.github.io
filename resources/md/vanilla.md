# Vanilla
## ヴァニラプロジェクトについて
<img src="./resources/images/vanilla.jpg" width="150"/>
ヴァニラプロジェクトは、ドール型2足歩行ロボットを製作する個人的なプロジェクトです。
このプロジェクトには以下の2つの目標があります。

### ローゼンメイデンのような、人間のパートナーとなるドールの外見を有したロボットを実現すること
Peach Pit先生の漫画「ローゼンメイデン」は超絶技巧を持った人形師ローゼンの作った、命を持ったドール「ローゼンメイデン」を中心とした物語です。ドールが走り回ったり、主人公と会話したり、非常に愛らしい姿を見ることができます。
このような生活のパートナーとなるものをロボット技術で実現したいという思いでヴァニラの開発をはじめました。
小型の2足歩行ロボットにおいて、そのサイズとドールのようなプロポーションを同時に成立させるのは非常に難しいことです。その要因の一つとして、市販のドール外皮を分解してロボットの外装として利用することが多いということがあります。
そこで、このプロジェクトでは、既成のドール外皮を使わず、フルスクラッチで外装を作ることで、サイズ、プロポーションに自由度を持たせられるようにしました。
バキュームフォームを使ったドール外皮の製作の取り組みについては[このブログ記事](http://blog.syundo.org/post/2010-12-18-vacuum-forming/)を御覧ください。

現在は、3Dプリンタを利用することで、フレームとドール外装が一体となった構造の実現に取り組んでいます。

### モーション再生よりも一歩進んだ歩行制御技術を開発し、制御ソフトウェアを誰もが再利用可能な形で提供すること
趣味で製作されている2足歩行ロボットは、決まったモーションを事前に作ってそれを再生しているようなものが多いです。
そのような方法では外乱に弱く、予め決まった環境でしか歩行できないロボットしか作ることはできません。
ヴァニラプロジェクトでは、より安定した自然な歩行を実現するために、研究に取り組んでいます。
ヴァニラの歩行制御技術開発は2つの方向から進めています。
* Capture Point規範のフィードバック制御により、倒立振子モデルに基いて生成した歩行を安定化させる方法
* CPGとロボット自身の同期を用いた、適応的歩容生成 [記事](http://blog.syundo.org/post/20171203-cpg-and-walk/)

これらの制御プログラムは[mbed.org](https://os.mbed.com/users/syundo0730/code/Hobby_Humanoid_controlor/), [github](https://github.com/syundo0730/vanilla-core)で公開しています。
なるべく手に入れやすく、ハードウェアを再現しやすいように、コントロールボードにはmbed、raspberry piを使っています。
残念ながらコントロールボードは現状、ユニバーサル基板上に配線したものなので、プリント基板に起こして配布できるようにするのは今後の課題です。

また、歩行制御技術に限らず、より知的な行動決定を研究するプロジェクトとしては、ヴァニラスケルトンとして別に説明してありますので、[こちら](#/vanilla_skeleton)を御覧ください。

## 大会参加履歴
* 第１回，第２回船場ロボットファッションコンテスト参加
* 第22回，23回，26回ROBO-ONE　予選落ち
* 第25回，29回ROBO-ONE 棄権

## 諸元
### Motors
* RS304MD	x 12	腕部のシリアルサーボモータ
* PRSFF09PII	x 10	脚部のPWMサーボモータ
* EnrouteD9MX	x 8	首，腕のPWMサーボモータ

### Controllers
* mbed x 1	モータ制御，センサ情報処理，歩行制御，モーション再生のためのコントロールボード
* Beagle Bone Black	x 1 高位の歩行制御，画像処理等のためのコントロールボード
* Raspberry Pi Zero (Beagle Bone Black からの置き換え)
* Adafruit PWM LED Driver	x 1	PWM信号生成のためのコントロールボード

### Sensors
* MPU6050	x 1	6軸IMU
* Logitech I/M connect Camera	x 2	USBカメラ

## Photos
![Vanilla Born](resources/images/vanilla_born.jpg)

## Videos
<iframe width="560" height="315" src="https://www.youtube.com/embed/enZsIhNzAms" frameborder="0" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dyA7645_rA4" frameborder="0" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5eofgrGTjyo" frameborder="0" allowfullscreen></iframe>