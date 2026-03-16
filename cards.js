// 医学英語フラッシュカード データ
// eslint-disable-next-line no-unused-vars
const C=[
// ===== BASICS =====
{d:'basics',en:'cell / cellular',kata:'セル / セルラー',ja:'細胞 / 細胞の',ex:'cellular mechanism = 細胞メカニズム',deriv:[
  {t:'d',w:'cell → cellular（形）, intracellular（細胞内の）, extracellular（細胞外の）, unicellular（単細胞の）'},
  {t:'r',w:'organelle（細胞小器官）, cytoplasm（細胞質）, nucleus（核）, membrane（膜）'}]},
{d:'basics',en:'protein',kata:'プロテイン',ja:'タンパク質',ex:'protein expression = タンパク質発現',deriv:[
  {t:'d',w:'protein → proteinaceous（タンパク質性の）, proteomics（プロテオミクス）'},
  {t:'r',w:'polypeptide（ポリペプチド）, amino acid（アミノ酸）, enzyme（酵素）, antibody（抗体）'}]},
{d:'basics',en:'gene / genome',kata:'ジーン / ジノーム',ja:'遺伝子 / ゲノム',ex:'genomic analysis = ゲノム解析',deriv:[
  {t:'d',w:'gene → genetic（遺伝の）, genotype（遺伝子型）, genetics（遺伝学）'},
  {t:'d',w:'genome → genomic（ゲノムの）, genomics（ゲノミクス）'},
  {t:'r',w:'allele（対立遺伝子）, locus（遺伝子座）, chromosome（染色体）'}]},
{d:'basics',en:'mutation / variant',kata:'ミューテーション / ヴェリアント',ja:'変異 / 変異体',ex:'genetic variant = 遺伝子変異体',deriv:[
  {t:'d',w:'mutate（変異する）, mutant（変異体・変異の）, mutagenic（変異原性の）'},
  {t:'s',w:'alteration（変化）, modification（修飾）, polymorphism（多型）'},
  {t:'r',w:'SNP（一塩基多型）, point mutation（点変異）, deletion（欠失）, insertion（挿入）'}]},
{d:'basics',en:'expression',kata:'エクスプレッション',ja:'発現',ex:'gene expression = 遺伝子発現',deriv:[
  {t:'d',w:'express（発現する）, expressed（発現している）, overexpression（過剰発現）'},
  {t:'r',w:'upregulate（上方制御）, downregulate（下方制御）, suppress（抑制する）'},
  {t:'a',w:'silencing（サイレンシング・発現抑制）, repression（抑圧）'}]},
{d:'basics',en:'receptor / ligand',kata:'レセプター / リガンド',ja:'受容体 / リガンド',ex:'receptor binding affinity = 受容体結合親和性',deriv:[
  {t:'d',w:'receptor → receptor-mediated（受容体介在性の）'},
  {t:'r',w:'agonist（作動薬）, antagonist（拮抗薬）, binding affinity（結合親和性）, signal transduction（シグナル伝達）'},
  {t:'a',w:'agonist（促進）⇔ antagonist（拮抗・阻害）'}]},
{d:'basics',en:'apoptosis',kata:'アポトーシス',ja:'アポトーシス（プログラム細胞死）',ex:'遺伝的にプログラムされた細胞死',deriv:[
  {t:'d',w:'apoptotic（アポトーシスの）, apoptose（アポトーシスを起こす）'},
  {t:'s',w:'programmed cell death（プログラム細胞死）'},
  {t:'a',w:'necrosis（壊死・非制御的細胞死）, cell survival（細胞生存）'},
  {t:'r',w:'caspase（カスパーゼ）, cytochrome c, Bcl-2 family'}]},
{d:'basics',en:'proliferation',kata:'プロリフェレーション',ja:'増殖',ex:'cell proliferation = 細胞増殖',deriv:[
  {t:'d',w:'proliferate（増殖する）, proliferative（増殖性の）'},
  {t:'s',w:'growth, expansion, replication（複製）'},
  {t:'a',w:'apoptosis（細胞死）, senescence（老化・増殖停止）, quiescence（静止）'},
  {t:'r',w:'differentiation（分化）, mitosis（有糸分裂）'}]},
{d:'basics',en:'metabolism / metabolite',kata:'メタボリズム / メタボライト',ja:'代謝 / 代謝産物',ex:'metabolic disorder = 代謝異常',deriv:[
  {t:'d',w:'metabolize（代謝する）, metabolic（代謝の）, metabolomics（メタボロミクス）'},
  {t:'r',w:'catabolism（異化代謝）, anabolism（同化代謝）, enzyme（酵素）, ATP'}]},
{d:'basics',en:'transcription / translation',kata:'トランスクリプション / トランスレーション',ja:'転写 / 翻訳',ex:'セントラルドグマ：DNA→RNA→タンパク質',deriv:[
  {t:'d',w:'transcribe（転写する）, transcriptome（トランスクリプトーム）'},
  {t:'d',w:'translate（翻訳する）, translational（翻訳の）, post-translational（翻訳後の）'},
  {t:'r',w:'reverse transcription（逆転写）, RNA polymerase（RNAポリメラーゼ）, ribosome（リボソーム）'}]},
{d:'basics',en:'pathogenesis',kata:'パソジェネシス',ja:'発症機序・病因論',ex:'ADの発症機序 = the pathogenesis of Alzheimer\'s disease',deriv:[
  {t:'d',w:'pathogenic（病原性の）, pathogen（病原体）, pathology（病理学）, pathological（病理学的な）'},
  {t:'s',w:'disease mechanism, mechanistic basis（メカニズム的基盤）'},
  {t:'r',w:'etiology（病因）, physiopathology（病態生理学）'}]},
{d:'basics',en:'diagnosis / prognosis',kata:'ダイアグノーシス / プログノーシス',ja:'診断 / 予後',ex:'differential diagnosis = 鑑別診断',deriv:[
  {t:'d',w:'diagnose（診断する）, diagnostic（診断の）, diagnostics（診断学）'},
  {t:'d',w:'prognostic（予後の）, prognosticate（予後を予測する）'},
  {t:'r',w:'differential diagnosis（鑑別診断）, misdiagnosis（誤診）, biomarker（バイオマーカー）'}]},
{d:'basics',en:'acute / chronic',kata:'アキュート / クロニック',ja:'急性 / 慢性',ex:'acute inflammation → chronic disease',deriv:[
  {t:'a',w:'acute（急性）⇔ chronic（慢性）'},
  {t:'r',w:'subacute（亜急性）, fulminant（劇症の）, remission（寛解）, relapse（再燃）'},
  {t:'d',w:'chronically（慢性的に）, acutely（急性的に）'}]},
{d:'basics',en:'prevalence / incidence',kata:'プレヴァレンス / インシデンス',ja:'有病率 / 発生率',ex:'prevalence = 時点での罹患率。incidence = 新規発症率',deriv:[
  {t:'d',w:'prevalent（一般的な・広まっている）, incidental（偶発的な）'},
  {t:'r',w:'mortality（死亡率）, morbidity（罹病率）, epidemiology（疫学）'},
  {t:'s',w:'frequency（頻度）, rate（率）'}]},
{d:'basics',en:'benign / malignant',kata:'ビナイン / マリグナント',ja:'良性 / 悪性',ex:'malignant tumor = 悪性腫瘍（がん）',deriv:[
  {t:'a',w:'benign（良性）⇔ malignant（悪性）'},
  {t:'d',w:'malignancy（悪性度・悪性腫瘍）, malignantly（悪性的に）'},
  {t:'r',w:'metastasis（転移）, invasion（浸潤）, neoplasm（新生物）, carcinoma（癌腫）'}]},
{d:'basics',en:'metastasis',kata:'メタスタシス',ja:'転移',ex:'cancer metastasis = がん転移',deriv:[
  {t:'d',w:'metastasize（転移する）, metastatic（転移性の）, metastases（複数形）'},
  {t:'s',w:'dissemination（播種）, spread（拡散）'},
  {t:'r',w:'invasion（浸潤）, lymph node（リンパ節）, distant metastasis（遠隔転移）'}]},
{d:'basics',en:'biomarker',kata:'バイオマーカー',ja:'バイオマーカー',ex:'疾患診断・治療効果判定に用いる生体指標',deriv:[
  {t:'r',w:'surrogate endpoint（代替エンドポイント）, serum marker（血清マーカー）, sensitivity/specificity'},
  {t:'d',w:'biological marker（生体マーカー）の略語'},
  {t:'r',w:'liquid biopsy（リキッドバイオプシー）, proteomics（プロテオミクス）'}]},
{d:'basics',en:'clinical trial',kata:'クリニカル・トライアル',ja:'臨床試験',ex:'phase I/II/III trial = 第1/2/3相試験',deriv:[
  {t:'d',w:'clinical（臨床の）, clinically（臨床的に）, clinician（臨床医）'},
  {t:'r',w:'RCT（ランダム化比較試験）, open-label（非盲検）, double-blind（二重盲検）'},
  {t:'r',w:'informed consent（インフォームドコンセント）, protocol（プロトコル）'}]},
{d:'basics',en:'placebo / double-blind',kata:'プラシーボ / ダブルブラインド',ja:'プラセボ（偽薬） / 二重盲検',ex:'double-blind placebo-controlled RCT = 標準的臨床試験デザイン',deriv:[
  {t:'d',w:'placebo effect（プラセボ効果）, nocebo effect（ノシーボ効果：プラセボの逆）'},
  {t:'r',w:'single-blind（単盲検）, open-label（非盲検）, allocation concealment（割り付け隠蔽）'}]},
{d:'basics',en:'inflammation',kata:'インフラメーション',ja:'炎症',ex:'chronic inflammation = 慢性炎症',deriv:[
  {t:'d',w:'inflame（炎症を起こす）, inflammatory（炎症性の）, anti-inflammatory（抗炎症性の）'},
  {t:'s',w:'reaction（反応）, irritation（刺激）'},
  {t:'r',w:'cytokine（サイトカイン）, edema（浮腫）, erythema（発赤）, fever（発熱）'}]},
{d:'basics',en:'oxidative stress',kata:'オキシデイティブ・ストレス',ja:'酸化ストレス',ex:'ROS産生増加によりDNA・細胞を損傷',deriv:[
  {t:'d',w:'oxidize（酸化する）, oxidation（酸化）, antioxidant（抗酸化物質・抗酸化の）'},
  {t:'a',w:'antioxidant defense（抗酸化防御）, reductive（還元の）'},
  {t:'r',w:'reactive oxygen species（ROS・活性酸素種）, free radical（フリーラジカル）, superoxide dismutase（SOD）'}]},
{d:'basics',en:'blood-brain barrier',kata:'ブラッド・ブレイン・バリアー',ja:'血液脳関門（BBB）',ex:'脳への物質移動を選択的に制限',deriv:[
  {t:'d',w:'BBB penetration（BBB通過）, BBB-permeable（BBB透過性の）'},
  {t:'r',w:'tight junction（密着結合）, P-glycoprotein（P糖タンパク質）, CNS drug delivery（中枢薬物送達）'},
  {t:'a',w:'BBB disruption（BBB破綻）⇔ BBB integrity（BBBの健全性）'}]},
{d:'basics',en:'efficacy / effectiveness',kata:'エフィカシー / エフェクティブネス',ja:'有効性（理想）/ 実効性（現実）',ex:'efficacy = RCT。effectiveness = 実臨床',deriv:[
  {t:'d',w:'effective（有効な）, efficacious（効果的な）, effectiveness（有効性）'},
  {t:'a',w:'ineffective（無効な）, inefficacy（無効性）'},
  {t:'s',w:'potency（効力）, therapeutic effect（治療効果）'}]},
{d:'basics',en:'precision medicine',kata:'プレシジョン・メディシン',ja:'精密医療',ex:'遺伝子・環境情報に基づく個人最適化治療',deriv:[
  {t:'s',w:'personalized medicine（個別化医療）, stratified medicine（層別化医療）'},
  {t:'d',w:'precise（精密な）, precision（精度）'},
  {t:'r',w:'biomarker-guided therapy（バイオマーカー指導療法）, genomics（ゲノミクス）'}]},
{d:'basics',en:'stem cell',kata:'ステム・セル',ja:'幹細胞',ex:'pluripotent = 多能性。iPS細胞 = induced pluripotent stem cell',deriv:[
  {t:'d',w:'stem cell niche（幹細胞ニッチ）, stemness（幹細胞性）'},
  {t:'r',w:'pluripotent（多能性の）, totipotent（全能性の）, multipotent（多分化能の）'},
  {t:'r',w:'iPSC = induced pluripotent stem cell（人工多能性幹細胞）'}]},
{d:'basics',en:'meta-analysis',kata:'メタ・アナリシス',ja:'メタ解析',ex:'複数研究を統合。エビデンス階層の最上位',deriv:[
  {t:'s',w:'systematic review（系統的レビュー）, pooled analysis（統合解析）'},
  {t:'d',w:'meta-analytic（メタ解析の）'},
  {t:'r',w:'heterogeneity（異質性）, forest plot（フォレストプロット）, publication bias（出版バイアス）'}]},
{d:'basics',en:'etiology',kata:'イーティオロジー',ja:'病因（何が原因か）',ex:'pathogenesis（どのように発症するか）と区別',deriv:[
  {t:'d',w:'etiologic / etiological（病因の）, etiopathogenesis（病因・病態）'},
  {t:'s',w:'cause（原因）, origin（起源）'},
  {t:'r',w:'risk factor（危険因子）, predisposing factor（素因）, trigger（引き金）'}]},
{d:'basics',en:'comorbidity',kata:'コモービディティ',ja:'併存疾患',ex:'患者が同時に持つ複数の疾患',deriv:[
  {t:'d',w:'comorbid（併存疾患のある）'},
  {t:'s',w:'multimorbidity（多疾患併存）, coexisting condition'},
  {t:'r',w:'polypharmacy（多剤併用）, complex patient（複雑な患者）'}]},
{d:'basics',en:'adverse effect',kata:'アドバース・エフェクト',ja:'有害事象 / 副作用',ex:'serious adverse event (SAE) = 重篤な有害事象',deriv:[
  {t:'d',w:'adverse（不利な・有害な）, adversely（有害に）'},
  {t:'s',w:'side effect（副作用）, undesirable effect（望ましくない効果）'},
  {t:'a',w:'beneficial effect（有益な効果）, therapeutic effect（治療効果）'}]},
{d:'basics',en:'in vitro / in vivo',kata:'インヴィトロ / インヴィヴォ',ja:'試験管内 / 生体内',ex:'in vivo study = 動物・ヒトを使った生体実験',deriv:[
  {t:'r',w:'in silico（コンピューター上での）, ex vivo（生体外・組織を摘出して行う）'},
  {t:'a',w:'in vitro（細胞・試験管）⇔ in vivo（生体内）'}]},
{d:'basics',en:'biopsy',kata:'バイオプシー',ja:'生検',ex:'histopathology = 組織病理学。がん診断の基本',deriv:[
  {t:'d',w:'biopsy → bioptic（生検の）'},
  {t:'r',w:'excisional biopsy（切除生検）, core needle biopsy（コア針生検）, liquid biopsy（リキッドバイオプシー）'},
  {t:'s',w:'tissue sampling（組織採取）, pathological examination（病理検査）'}]},
{d:'basics',en:'dose-response relationship',kata:'ドース・レスポンス',ja:'用量反応関係',ex:'用量が増えるほど効果/副作用が増加',deriv:[
  {t:'d',w:'dose（投与量）, dosing（投与）, dosage（用法用量）, underdose（過少投与）, overdose（過剰投与）'},
  {t:'r',w:'therapeutic window（治療域）, IC50（50%阻害濃度）, ED50（50%有効量）'}]},
{d:'basics',en:'surrogate endpoint',kata:'サロゲート・エンドポイント',ja:'代替エンドポイント',ex:'primary endpoint = 試験の主要評価指標',deriv:[
  {t:'a',w:'primary endpoint（主要評価項目）⇔ surrogate endpoint（代替）'},
  {t:'r',w:'overall survival（OS・全生存期間）, progression-free survival（PFS・無増悪生存期間）'},
  {t:'d',w:'endpoint → primary/secondary/surrogate endpoint'}]},
{d:'basics',en:'next-generation sequencing',kata:'ネクスト・ジェネレーション・シークエンシング',ja:'次世代シーケンシング（NGS）',ex:'大量の塩基配列を高速・低コストで解読',deriv:[
  {t:'s',w:'massively parallel sequencing（大規模並列シーケンシング）, high-throughput sequencing'},
  {t:'r',w:'whole genome sequencing（WGS）, whole exome sequencing（WES）, RNA-seq（転写産物解析）'},
  {t:'d',w:'sequence（配列・配列決定する）, sequencing（シーケンシング）'}]},
{d:'basics',en:'epigenetics',kata:'エピジェネティクス',ja:'エピジェネティクス',ex:'塩基配列を変えずにDNAメチル化等で発現制御',deriv:[
  {t:'d',w:'epigenetic（エピジェネティックな）, epigenome（エピゲノム）, epigenomics（エピゲノミクス）'},
  {t:'r',w:'DNA methylation（DNAメチル化）, histone modification（ヒストン修飾）, chromatin remodeling（クロマチン再構成）'}]},
{d:'basics',en:'randomized controlled trial',kata:'ランダマイズド・コントロールド・トライアル',ja:'ランダム化比較試験（RCT）',ex:'エビデンスの頂点。無作為割り付けで交絡排除',deriv:[
  {t:'d',w:'randomize（無作為化する）, randomization（無作為化）, randomized（無作為化された）'},
  {t:'r',w:'allocation（割り付け）, blinding（盲検化）, control arm（対照群）, treatment arm（治療群）'}]},
{d:'basics',en:'odds ratio',kata:'オッズ・レーシオ',ja:'オッズ比（OR）',ex:'OR > 1 = リスク増加。症例対照研究で使用',deriv:[
  {t:'s',w:'relative risk（RR・相対リスク）, hazard ratio（HR・ハザード比）, risk ratio'},
  {t:'r',w:'confidence interval（CI・信頼区間）, p-value（p値）'},
  {t:'a',w:'OR = 1（関連なし）⇔ OR > 1（リスク増加）⇔ OR < 1（リスク低下）'}]},
{d:'basics',en:'sensitivity / specificity',kata:'センシティビティ / スペシフィシティ',ja:'感度 / 特異度',ex:'感度↑=見逃し減。特異度↑=誤診減',deriv:[
  {t:'d',w:'sensitive（感受性の高い）, specific（特異的な）, specificity（特異度）'},
  {t:'r',w:'positive predictive value（PPV・陽性的中率）, negative predictive value（NPV・陰性的中率）'},
  {t:'a',w:'sensitivity（感度）⇔ specificity（特異度）はROC曲線でトレードオフ関係'}]},
{d:'basics',en:'regenerative medicine',kata:'リジェネラティブ・メディシン',ja:'再生医療',ex:'損傷した組織・臓器の修復・再生を目指す医療',deriv:[
  {t:'d',w:'regenerate（再生する）, regeneration（再生）, regenerative（再生の）'},
  {t:'r',w:'stem cell therapy（幹細胞療法）, tissue engineering（組織工学）, scaffold（スキャフォールド）'},
  {t:'r',w:'iPSC（人工多能性幹細胞）, organ transplantation（臓器移植）'}]},
{d:'basics',en:'informed consent',kata:'インフォームド・コンセント',ja:'インフォームドコンセント',ex:'被験者への十分な説明と自由意思に基づく同意',deriv:[
  {t:'d',w:'inform（説明する）, informed（十分に説明を受けた）'},
  {t:'r',w:'autonomy（自律性）, ethics（倫理）, assent（賛同）, capacity（意思決定能力）'},
  {t:'s',w:'voluntary agreement（自発的同意）, patient consent（患者同意）'}]},
{d:'basics',en:'statistical significance',kata:'スタティスティカル・シグニフィカンス',ja:'統計的有意性',ex:'p < 0.05が基準。臨床的意義とは別物',deriv:[
  {t:'d',w:'significant（有意な・重要な）, significantly（有意に）, significance（有意性・重要性）'},
  {t:'r',w:'p-value（p値）, confidence interval（信頼区間）, power（検出力）, effect size（効果量）'},
  {t:'a',w:'statistically significant ≠ clinically significant（臨床的に意味がある）'}]},
{d:'basics',en:'external validity',kata:'エクスターナル・ヴァリディティ',ja:'外的妥当性',ex:'研究結果が他の集団・環境に当てはまるか',deriv:[
  {t:'a',w:'internal validity（内的妥当性・研究内部の正確さ）⇔ external validity（外的妥当性・一般化可能性）'},
  {t:'d',w:'valid（妥当な）, validity（妥当性）, validate（検証する）'},
  {t:'s',w:'generalizability（汎化性能）, transportability（転用可能性）'}]},
{d:'basics',en:'confounding',kata:'コンファウンディング',ja:'交絡',ex:'曝露と結果の両方と関連し真の関係を歪める変数',deriv:[
  {t:'d',w:'confound（交絡させる）, confounder（交絡因子）, confounded（交絡した）'},
  {t:'r',w:'bias（バイアス）, randomization（無作為化）, stratification（層別化）, propensity score（傾向スコア）'},
  {t:'s',w:'bias（偏り）, effect modifier（効果修飾因子）'}]},

// ===== IMMUNE =====
{d:'immune',en:'innate immunity',kata:'イネイト・イミュニティ',ja:'自然免疫',ex:'非特異的・即座に反応。PAMPs認識。記憶なし',deriv:[
  {t:'d',w:'innate（生来の・先天的な）, innateness（先天性）'},
  {t:'a',w:'innate（自然免疫）⇔ adaptive（獲得免疫）'},
  {t:'r',w:'PAMPs（病原体関連分子パターン）, TLR（トール様受容体）, phagocytosis（貪食）'}]},
{d:'immune',en:'adaptive immunity',kata:'アダプティブ・イミュニティ',ja:'獲得免疫',ex:'特異的・遅延反応。T/B細胞。免疫記憶あり',deriv:[
  {t:'d',w:'adapt（適応する）, adaptive（適応的な）, adaptation（適応）'},
  {t:'r',w:'B cell（B細胞）, T cell（T細胞）, MHC, antigen presentation（抗原提示）'},
  {t:'s',w:'specific immunity（特異免疫）'}]},
{d:'immune',en:'T cell / B cell',kata:'ティー・セル / ビー・セル',ja:'T細胞 / B細胞',ex:'CD4+=ヘルパー。CD8+=細胞傷害性。B細胞=抗体産生',deriv:[
  {t:'r',w:'Treg（制御性T細胞）, Th1/Th2（Tヘルパー1/2型）, plasma cell（形質細胞・抗体産生）'},
  {t:'r',w:'thymus（胸腺・T細胞成熟の場）, bone marrow（骨髄・B細胞成熟の場）'},
  {t:'d',w:'T cell = thymus-derived（胸腺由来）, B cell = bone marrow-derived（骨髄由来）'}]},
{d:'immune',en:'antibody / antigen',kata:'アンティボディ / アンティジェン',ja:'抗体 / 抗原',ex:'monoclonal antibody = モノクローナル抗体',deriv:[
  {t:'d',w:'antibody → antibody-mediated（抗体介在性）, antigen → antigenic（抗原性の）, immunogenic（免疫原性の）'},
  {t:'r',w:'immunoglobulin（免疫グロブリン）, IgG/IgM/IgA/IgE（抗体クラス）'},
  {t:'s',w:'immunoglobulin（Ig）'}]},
{d:'immune',en:'cytokine / interleukin',kata:'サイトカイン / インターロイキン',ja:'サイトカイン / インターロイキン',ex:'cytokine storm = 免疫の過剰反応',deriv:[
  {t:'d',w:'cytokine → cytokine-mediated, cytokine storm（サイトカインストーム）'},
  {t:'r',w:'interferon（IFN）, tumor necrosis factor（TNF）, chemokine（ケモカイン）'},
  {t:'r',w:'IL-1, IL-6, IL-17（主要なインターロイキン）'}]},
{d:'immune',en:'autoimmune disease',kata:'オートイミューン・ディジーズ',ja:'自己免疫疾患',ex:'MS・RA・SLE・1型糖尿病。免疫寛容の破綻',deriv:[
  {t:'d',w:'autoimmune（自己免疫の）, autoimmunity（自己免疫性）'},
  {t:'r',w:'autoantibody（自己抗体）, self-antigen（自己抗原）, immune tolerance（免疫寛容）'},
  {t:'a',w:'immunodeficiency（免疫不全）⇔ autoimmunity（自己免疫・過剰反応）'}]},
{d:'immune',en:'checkpoint inhibitor',kata:'チェックポイント・インヒビター',ja:'免疫チェックポイント阻害剤',ex:'anti-PD-1/PD-L1。2018年ノーベル賞（本庶佑）',deriv:[
  {t:'d',w:'inhibit（阻害する）, inhibitor（阻害剤）, inhibitory（阻害的な）'},
  {t:'r',w:'PD-1, PD-L1, CTLA-4, ipilimumab（抗CTLA-4）, nivolumab（抗PD-1）'},
  {t:'a',w:'immune activation（免疫活性化）⇔ immune checkpoint（免疫チェックポイント・抑制）'}]},
{d:'immune',en:'NK cell',kata:'エヌケー・セル',ja:'NK細胞（ナチュラルキラー細胞）',ex:'事前感作なしにMHC-I欠損細胞（がん等）を攻撃',deriv:[
  {t:'r',w:'ADCC（抗体依存性細胞傷害）, perforin（パーフォリン）, granzyme（グランザイム）'},
  {t:'s',w:'cytotoxic cell（細胞傷害性細胞）, innate killer cell'},
  {t:'a',w:'NK cell（先天的・感作不要）⇔ cytotoxic T cell（後天的・感作必要）'}]},
{d:'immune',en:'macrophage',kata:'マクロファージ',ja:'マクロファージ',ex:'貪食細胞。炎症性サイトカイン産生',deriv:[
  {t:'d',w:'macrophage → macrophage activation（マクロファージ活性化）, macrophage polarization（極性化）'},
  {t:'r',w:'monocyte（単球・マクロファージの前駆体）, microglia（ミクログリア・脳のマクロファージ）, Kupffer cell（クッパー細胞・肝臓のマクロファージ）'},
  {t:'r',w:'M1 macrophage（炎症促進）, M2 macrophage（組織修復）'}]},
{d:'immune',en:'vaccine efficacy',kata:'ヴァクシン・エフィカシー',ja:'ワクチン有効率',ex:'VE = (1 - RR) × 100',deriv:[
  {t:'d',w:'vaccinate（ワクチン接種する）, vaccination（ワクチン接種）, vaccine（ワクチン）'},
  {t:'r',w:'immunization（免疫化）, booster（追加接種）, adjuvant（アジュバント・免疫増強剤）'},
  {t:'a',w:'vaccine efficacy（試験での有効性）⇔ vaccine effectiveness（実臨床での有効性）'}]},
{d:'immune',en:'herd immunity',kata:'ハード・イミュニティ',ja:'集団免疫',ex:'一定割合の免疫保有者が感染連鎖を阻止',deriv:[
  {t:'d',w:'herd immunity threshold（集団免疫閾値）'},
  {t:'r',w:'R0（基本再生産数）, R（有効再生産数）, outbreak（アウトブレーク）'},
  {t:'s',w:'population immunity, community immunity'}]},
{d:'immune',en:'immunosuppression',kata:'イミュノサプレッション',ja:'免疫抑制',ex:'臓器移植・自己免疫疾患治療で使用',deriv:[
  {t:'d',w:'immunosuppressed（免疫抑制された）, immunosuppressant（免疫抑制薬）'},
  {t:'a',w:'immunostimulation（免疫刺激）, immunocompetent（免疫力のある）'},
  {t:'r',w:'corticosteroid（副腎皮質ステロイド）, cyclosporine（シクロスポリン）, tacrolimus（タクロリムス）'}]},
{d:'immune',en:'mast cell',kata:'マスト・セル',ja:'マスト細胞',ex:'IgEと結合しヒスタミン放出。アレルギーの主役',deriv:[
  {t:'r',w:'basophil（好塩基球）, histamine（ヒスタミン）, tryptase（トリプターゼ）, IgE'},
  {t:'r',w:'degranulation（脱顆粒）, anaphylaxis（アナフィラキシー）'},
  {t:'s',w:'basophil（血中に存在する類似細胞）'}]},
{d:'immune',en:'regulatory T cell',kata:'レギュラトリー・ティー・セル',ja:'制御性T細胞（Treg）',ex:'免疫応答を抑制し自己免疫・アレルギーを防ぐ',deriv:[
  {t:'d',w:'regulation（制御）, regulatory（制御的な）, regulate（制御する）'},
  {t:'r',w:'FOXP3（Tregの転写因子）, IL-10（抑制性サイトカイン）, TGF-β'},
  {t:'a',w:'Treg（抑制）⇔ Th17（炎症促進）'}]},
{d:'immune',en:'complement system',kata:'コンプリメント・システム',ja:'補体系',ex:'自然免疫の一部。病原体の破壊・炎症促進',deriv:[
  {t:'d',w:'complement（補体）, complementary（補完的な）, activate the complement（補体を活性化する）'},
  {t:'r',w:'opsonization（オプソニン化）, membrane attack complex（MAC）, C3b, C5a'},
  {t:'r',w:'classical pathway（古典経路）, alternative pathway（第二経路）, lectin pathway（レクチン経路）'}]},
{d:'immune',en:'opsonization',kata:'オプソナイゼーション',ja:'オプソニン化',ex:'抗体・補体が病原体に結合してマクロファージの貪食を促進',deriv:[
  {t:'d',w:'opsonize（オプソニン化する）, opsonin（オプソニン）'},
  {t:'r',w:'phagocytosis（貪食）, Fc receptor（Fc受容体）, C3b（補体断片）'},
  {t:'s',w:'tagging（タグ付け）, labeling for phagocytosis'}]},
{d:'immune',en:'phagocytosis',kata:'ファゴサイトーシス',ja:'貪食',ex:'マクロファージ・好中球が病原体を取り込んで分解',deriv:[
  {t:'d',w:'phagocyte（貪食細胞）, phagocytic（貪食の）, phagosome（ファゴソーム）'},
  {t:'r',w:'macrophage, neutrophil, phagolysosome（ファゴリソソーム）'},
  {t:'s',w:'endocytosis（エンドサイトーシス）, pinocytosis（飲食作用）'}]},
{d:'immune',en:'immunological memory',kata:'イミュノロジカル・メモリー',ja:'免疫記憶',ex:'再感染時に素早く強い応答。ワクチンの基盤',deriv:[
  {t:'d',w:'memory B cell（記憶B細胞）, memory T cell（記憶T細胞）'},
  {t:'r',w:'secondary immune response（二次免疫応答）, long-lived plasma cell（長命形質細胞）'},
  {t:'a',w:'primary immune response（一次応答・遅い）⇔ secondary（二次応答・速い・強い）'}]},
{d:'immune',en:'interferon',kata:'インターフェロン',ja:'インターフェロン（IFN）',ex:'ウイルス感染に応じて産生される抗ウイルスサイトカイン',deriv:[
  {t:'d',w:'interferon-α/β（IFN-α/β・I型）, interferon-γ（IFN-γ・II型）'},
  {t:'r',w:'antiviral response（抗ウイルス反応）, MHC upregulation, innate immunity'},
  {t:'s',w:'type I interferon（I型インターフェロン）'}]},
{d:'immune',en:'tumor microenvironment',kata:'テューマー・マイクロエンバイロンメント',ja:'腫瘍微小環境（TME）',ex:'腫瘍内の免疫細胞・血管・基質',deriv:[
  {t:'r',w:'tumor-infiltrating lymphocyte（TIL）, myeloid-derived suppressor cell（MDSC）'},
  {t:'r',w:'cancer-associated fibroblast（CAF）, angiogenesis（血管新生）'},
  {t:'d',w:'microenvironment = micro（小さな）+ environment（環境）'}]},
{d:'immune',en:'antigen-presenting cell',kata:'アンティジェン・プレゼンティング・セル',ja:'抗原提示細胞（APC）',ex:'MHCにペプチドを乗せてT細胞に提示',deriv:[
  {t:'r',w:'dendritic cell（樹状細胞・最強のAPC）, macrophage, B cell'},
  {t:'r',w:'MHC class II（CD4+ T細胞への提示）, peptide（ペプチド）, cross-presentation（交差提示）'},
  {t:'d',w:'present（提示する）, presentation（提示）, antigen processing（抗原処理）'}]},
{d:'immune',en:'germinal center',kata:'ジャーミナル・センター',ja:'胚中心',ex:'リンパ節内でB細胞が増殖・分化・親和性成熟する場',deriv:[
  {t:'r',w:'somatic hypermutation（体細胞過変異）, affinity maturation（親和性成熟）, class switching（クラススイッチング）'},
  {t:'r',w:'follicular helper T cell（Tfh細胞・胚中心でB細胞を助ける）'},
  {t:'d',w:'germinal（胚・初期の）'}]},
{d:'immune',en:'sepsis',kata:'セプシス',ja:'敗血症',ex:'感染に対する生体反応の制御不能。臓器不全',deriv:[
  {t:'d',w:'septic（敗血症の）, septicemia（菌血症）, septic shock（敗血症性ショック）'},
  {t:'r',w:'SIRS（全身性炎症反応症候群）, organ failure（臓器不全）, ICU（集中治療室）'},
  {t:'a',w:'localized infection（局所感染）⇔ sepsis（全身性感染反応）'}]},
{d:'immune',en:'somatic hypermutation',kata:'ソマティック・ハイパーミューテーション',ja:'体細胞過変異',ex:'胚中心でB細胞の可変領域に変異が蓄積し親和性が向上',deriv:[
  {t:'d',w:'somatic（体細胞の）, hypermutation（過変異）, mutation rate（変異率）'},
  {t:'r',w:'germinal center（胚中心）, AID（活性化誘導シチジンデアミナーゼ・変異を誘導する酵素）'},
  {t:'r',w:'affinity maturation（親和性成熟）, antibody diversity（抗体多様性）'}]},
{d:'immune',en:'PD-1 / PD-L1',kata:'ピーディーワン / ピーディーエルワン',ja:'PD-1 / PD-L1',ex:'腫瘍細胞がPD-L1を発現してT細胞を抑制するのをブロック',deriv:[
  {t:'d',w:'PD = programmed death（プログラム死）の略'},
  {t:'r',w:'nivolumab（ニボルマブ・抗PD-1）, pembrolizumab（ペムブロリズマブ）, atezolizumab（抗PD-L1）'},
  {t:'a',w:'PD-1/PD-L1 interaction（免疫抑制）⇔ anti-PD-1/PD-L1 therapy（免疫活性化）'}]},
{d:'immune',en:'allergy / hypersensitivity',kata:'アレルジー / ハイパーセンシティビティ',ja:'アレルギー / 過敏反応',ex:'type I（IgE介在・即時型）〜type IV（遅延型）の4型',deriv:[
  {t:'d',w:'allergic（アレルギー性の）, allergist（アレルギー専門医）, allergen（アレルゲン）'},
  {t:'r',w:'anaphylaxis（アナフィラキシー・全身性過敏反応）, atopy（アトピー）, IgE'},
  {t:'a',w:'sensitization（感作）⇔ desensitization/immunotherapy（減感作療法）'}]},
{d:'immune',en:'class switching',kata:'クラス・スウィッチング',ja:'クラススイッチング',ex:'IgM→IgG/IgA/IgEへの抗体クラス変換',deriv:[
  {t:'d',w:'isotype switching（アイソタイプスイッチング）'},
  {t:'r',w:'IgM（最初に産生）, IgG（最も多い・全身）, IgA（粘膜）, IgE（アレルギー）'},
  {t:'r',w:'AID（活性化誘導シチジンデアミナーゼ）, T cell help（T細胞の助け）'}]},
{d:'immune',en:'affinity maturation',kata:'アフィニティ・マチュレーション',ja:'親和性成熟',ex:'胚中心でB細胞が体細胞変異し抗体の親和性が高まる',deriv:[
  {t:'d',w:'affinity（親和性）, mature（成熟する）, maturation（成熟）'},
  {t:'r',w:'KD（解離定数・親和性の指標）, binding affinity（結合親和性）'},
  {t:'s',w:'antibody optimization（抗体最適化）'}]},

// ===== NEURO =====
{d:'neuro',en:'neuron',kata:'ニューロン',ja:'ニューロン（神経細胞）',ex:'motor/sensory/interneuron',deriv:[
  {t:'d',w:'neuronal（神経細胞の）, neuroscience（神経科学）, neurology（神経学）, neurologist（神経科医）'},
  {t:'r',w:'axon（軸索）, dendrite（樹状突起）, soma（細胞体）, synapse（シナプス）'},
  {t:'r',w:'excitatory neuron（興奮性）⇔ inhibitory neuron（抑制性）'}]},
{d:'neuro',en:'synapse',kata:'シナプス',ja:'シナプス',ex:'presynaptic → neurotransmitter → postsynaptic receptor',deriv:[
  {t:'d',w:'synaptic（シナプスの）, synaptogenesis（シナプス形成）, synaptic pruning（シナプス刈り込み）'},
  {t:'r',w:'excitatory synapse（興奮性）⇔ inhibitory synapse（抑制性）'},
  {t:'r',w:'EPSP（興奮性後シナプス電位）, IPSP（抑制性後シナプス電位）'}]},
{d:'neuro',en:'action potential',kata:'アクション・ポテンシャル',ja:'活動電位',ex:'脱分極→再分極の電気信号',deriv:[
  {t:'r',w:'depolarization（脱分極）, repolarization（再分極）, refractory period（不応期）'},
  {t:'r',w:'Na+ channel（ナトリウムチャネル）, K+ channel（カリウムチャネル）, all-or-none law（全か無かの法則）'},
  {t:'r',w:'threshold（閾値）, firing rate（発火頻度）'}]},
{d:'neuro',en:'glutamate',kata:'グルータメイト',ja:'グルタミン酸（主要興奮性伝達物質）',ex:'過剰 = 興奮毒性。脳梗塞・神経変性に関与',deriv:[
  {t:'d',w:'glutamatergic（グルタミン酸作動性の）'},
  {t:'r',w:'NMDA receptor（NMDA受容体）, AMPA receptor（AMPA受容体）, excitotoxicity（興奮毒性）'},
  {t:'r',w:'glutamic acid（グルタミン酸・アミノ酸としての名称）'},
  {t:'a',w:'glutamate（興奮性）⇔ GABA（抑制性）'}]},
{d:'neuro',en:'GABA',kata:'ガバ',ja:'GABA（γ-アミノ酪酸・主要抑制性）',ex:'欠乏 = てんかん・不安障害',deriv:[
  {t:'d',w:'GABAergic（GABA作動性の）, GABA receptor（GABA受容体）'},
  {t:'r',w:'benzodiazepine（ベンゾジアゼピン・GABA-A受容体増強）, barbiturate（バルビツール酸）, valproate（バルプロ酸）'},
  {t:'a',w:'GABA（抑制性）⇔ glutamate（興奮性）'}]},
{d:'neuro',en:'dopamine',kata:'ドーパミン',ja:'ドーパミン',ex:'報酬・運動調節。欠乏=PD。過剰=統合失調症',deriv:[
  {t:'d',w:'dopaminergic（ドーパミン作動性の）, dopamine receptor（D1-D5）'},
  {t:'r',w:'reward pathway（報酬経路）, mesolimbic pathway（中脳辺縁系経路）, nigrostriatal pathway（黒質線条体経路）'},
  {t:'r',w:'L-DOPA（ドパ・PD治療薬）, antipsychotic（抗精神病薬・D2阻害）'}]},
{d:'neuro',en:'serotonin',kata:'セロトニン',ja:'セロトニン',ex:'気分・睡眠・食欲。欠乏=うつ病。SSRI=治療',deriv:[
  {t:'d',w:'serotonergic（セロトニン作動性の）, serotonin syndrome（セロトニン症候群・過剰状態）'},
  {t:'r',w:'SSRI（選択的セロトニン再取り込み阻害薬）, SNRI, 5-HT receptor（5-HT受容体）'},
  {t:'r',w:'melatonin（メラトニン・セロトニンの代謝産物）'}]},
{d:'neuro',en:'acetylcholine',kata:'アセティルコーリン',ja:'アセチルコリン',ex:'記憶・自律神経。欠乏=AD。AChE阻害薬で治療',deriv:[
  {t:'d',w:'cholinergic（コリン作動性の）, cholinesterase（コリンエステラーゼ）'},
  {t:'r',w:'AChE inhibitor（アセチルコリンエステラーゼ阻害薬・donepezil等）, nicotinic receptor, muscarinic receptor'},
  {t:'r',w:'neuromuscular junction（神経筋接合部）'}]},
{d:'neuro',en:'orexin',kata:'オレキシン',ja:'オレキシン（覚醒維持ペプチド）',ex:'筑波大IIIS・柳沢教授が1998年発見。欠乏=ナルコレプシー',deriv:[
  {t:'s',w:'hypocretin（ヒポクレチン・同一物質の別名）'},
  {t:'r',w:'orexin receptor（OX1R, OX2R）, suvorexant（スボレキサント・OXR拮抗薬・不眠症治療）'},
  {t:'r',w:'lateral hypothalamus（外側視床下部・産生部位）, wake-promoting（覚醒促進）'}]},
{d:'neuro',en:'neuroplasticity',kata:'ニューロプラスティシティ',ja:'神経可塑性',ex:'脳が経験・学習により構造・機能を変える能力',deriv:[
  {t:'d',w:'plastic（可塑的な）, plasticity（可塑性）, synaptic plasticity（シナプス可塑性）'},
  {t:'r',w:'LTP（長期増強）, LTD（長期抑制）, BDNF（脳由来神経栄養因子）'},
  {t:'r',w:'critical period（臨界期）, experience-dependent plasticity（経験依存的可塑性）'}]},
{d:'neuro',en:'LTP (long-term potentiation)',kata:'ロングターム・ポテンシエーション',ja:'長期増強（LTP）',ex:'シナプス伝達効率の持続的増強。学習・記憶の細胞メカニズム',deriv:[
  {t:'a',w:'LTP（長期増強・シナプス強化）⇔ LTD（長期抑制・シナプス弱化）'},
  {t:'r',w:'NMDA receptor（LTP誘導に必須）, AMPA receptor（LTP発現）, Ca2+（カルシウムイオン）'},
  {t:'r',w:'Hebbian learning（ヘッブ学習）, memory consolidation（記憶固定）'}]},
{d:'neuro',en:'amyloid-beta',kata:'アミロイド・ベータ',ja:'アミロイドβ（Aβ）',ex:'アルツハイマー病の細胞外病理マーカー。lecanemabの標的',deriv:[
  {t:'d',w:'amyloidogenic（アミロイド産生性の）, amyloidosis（アミロイドーシス）'},
  {t:'r',w:'APP（アミロイド前駆体タンパク質）, β-secretase（BACE1）, γ-secretase, presenilin'},
  {t:'a',w:'Aβ aggregation（凝集・病的）⇔ Aβ clearance（除去・治療目標）'}]},
{d:'neuro',en:'tau / neurofibrillary tangle',kata:'タウ / タングル',ja:'タウ / 神経原線維変化',ex:'ADの細胞内病理マーカー。リン酸化タウが凝集',deriv:[
  {t:'d',w:'tau hyperphosphorylation（タウ過剰リン酸化）, tauopathy（タウオパチー）'},
  {t:'r',w:'microtubule（微小管・正常なタウの機能）, phosphorylation（リン酸化）, aggregation（凝集）'},
  {t:'r',w:'frontotemporal dementia（前頭側頭型認知症・タウオパチーの一種）'}]},
{d:'neuro',en:"Alzheimer's disease",kata:'アルツハイマーズ・ディジーズ',ja:'アルツハイマー病（AD）',ex:'最多の認知症原因。Aβ斑＋tau神経原線維変化',deriv:[
  {t:'d',w:'Alzheimer\'s → dementia（認知症）, cognitive decline（認知機能低下）'},
  {t:'r',w:'cholinergic hypothesis, amyloid hypothesis（アミロイド仮説）, tau hypothesis'},
  {t:'r',w:'lecanemab（レカネマブ・抗Aβ抗体）, donepezil（ドネペジル・AChE阻害薬）'}]},
{d:'neuro',en:"Parkinson's disease",kata:'パーキンソンズ・ディジーズ',ja:'パーキンソン病（PD）',ex:'黒質ドーパミン産生ニューロンの変性。振戦・固縮・寡動',deriv:[
  {t:'d',w:'parkinsonism（パーキンソニズム・PD類似症状）, parkinsonian（パーキンソン的な）'},
  {t:'r',w:'α-synuclein（αシヌクレイン）, Lewy body（レビー小体）, substantia nigra（黒質）'},
  {t:'r',w:'L-DOPA（治療薬）, deep brain stimulation（DBS・脳深部刺激療法）'}]},
{d:'neuro',en:'multiple sclerosis',kata:'マルティプル・スクレローシス',ja:'多発性硬化症（MS）',ex:'中枢神経ミエリン鞘が自己免疫で破壊',deriv:[
  {t:'d',w:'sclerosis（硬化症）, sclerotic（硬化した）'},
  {t:'r',w:'demyelination（脱髄）, oligodendrocyte（オリゴデンドロサイト・ミエリン産生細胞）'},
  {t:'r',w:'relapsing-remitting MS（再発寛解型）, progressive MS（進行型）, CAR-T therapy'}]},
{d:'neuro',en:'neurodegeneration',kata:'ニューロデジェネレーション',ja:'神経変性',ex:'AD・PD・ALS・ハンチントン病等',deriv:[
  {t:'d',w:'degenerate（変性する）, degenerative（変性の）, neurodegenerative disease（神経変性疾患）'},
  {t:'r',w:'proteinopathy（タンパク質症）, aggregation（凝集）, misfolding（誤った折り畳み）'},
  {t:'a',w:'neurodegeneration（変性）⇔ neuroprotection（神経保護）'}]},
{d:'neuro',en:'myelin / demyelination',kata:'マイエリン / デミエリネーション',ja:'ミエリン / 脱髄',ex:'myelin sheath = 神経伝導速度を高める絶縁体。MS=脱髄疾患',deriv:[
  {t:'d',w:'myelination（髄鞘化）, myelinated（有髄の）, unmyelinated（無髄の）'},
  {t:'a',w:'myelination（髄鞘化・発達・保護）⇔ demyelination（脱髄・疾患）'},
  {t:'r',w:'oligodendrocyte（CNSのミエリン産生細胞）, Schwann cell（PNSのミエリン産生細胞）'}]},
{d:'neuro',en:'microglia',kata:'ミクログリア',ja:'ミクログリア',ex:'脳の免疫細胞。神経炎症で活性化',deriv:[
  {t:'d',w:'microglial activation（ミクログリア活性化）, microgliosis（ミクログリア増加）'},
  {t:'s',w:'brain-resident macrophage（脳常在マクロファージ）'},
  {t:'r',w:'M1（炎症促進）/ M2（神経修復）microglial polarization, TREM2（ミクログリア調節受容体）'}]},
{d:'neuro',en:'circadian rhythm',kata:'サーケイディアン・リズム',ja:'概日リズム',ex:'約24時間周期。視交叉上核（SCN）が中枢時計',deriv:[
  {t:'d',w:'circadian（概日の）, circadian clock（概日時計）, circadian disruption（概日リズム障害）'},
  {t:'r',w:'SCN（suprachiasmatic nucleus・視交叉上核）, melatonin（メラトニン）, CLOCK/BMAL1（時計遺伝子）'},
  {t:'r',w:'chronobiology（時間生物学）, jet lag（時差ぼけ）, shift work disorder（交代勤務障害）'}]},
{d:'neuro',en:'narcolepsy',kata:'ナルコレプシー',ja:'ナルコレプシー',ex:'オレキシン欠乏による日中過眠・情動脱力発作',deriv:[
  {t:'d',w:'narcoleptic（ナルコレプシーの・ナルコレプシー患者）'},
  {t:'r',w:'cataplexy（情動脱力発作）, orexin deficiency（オレキシン欠乏）, hypersomnia（過眠症）'},
  {t:'r',w:'modafinil（モダフィニル・覚醒促進薬）, sodium oxybate（オキシバート・カタプレキシー治療）'}]},
{d:'neuro',en:'hippocampus',kata:'ヒポキャンパス',ja:'海馬',ex:'記憶の固定に関与。ADで最初に萎縮する部位',deriv:[
  {t:'d',w:'hippocampal（海馬の）, hippocampus → hippocampi（複数形）'},
  {t:'r',w:'entorhinal cortex（嗅内皮質）, memory consolidation（記憶固定）, spatial navigation（空間ナビゲーション）'},
  {t:'r',w:'LTP（長期増強）, neurogenesis（神経新生）, BDNF（脳由来神経栄養因子）'}]},
{d:'neuro',en:'blood-brain barrier',kata:'ブラッド・ブレイン・バリアー',ja:'血液脳関門（BBB）',ex:'脳への物質移動を選択的に制限',deriv:[
  {t:'d',w:'BBB permeability（BBB透過性）, BBB disruption（BBB破綻）'},
  {t:'r',w:'tight junction（密着結合）, astrocyte（アストロサイト・BBB維持）, pericyte（周皮細胞）'},
  {t:'r',w:'CNS drug delivery（中枢薬物送達）, nanoparticle（ナノ粒子・BBB通過技術）'}]},
{d:'neuro',en:'vagus nerve',kata:'ヴェイガス・ナーヴ',ja:'迷走神経',ex:'脳と腸をつなぐ神経。腸脳軸（gut-brain axis）の主要経路',deriv:[
  {t:'d',w:'vagal（迷走神経の）, vagotomy（迷走神経切断術）'},
  {t:'r',w:'gut-brain axis（腸脳軸）, enteric nervous system（腸管神経系）, vagal tone（迷走神経緊張）'},
  {t:'r',w:'vagus nerve stimulation（VNS・てんかん・うつ病治療）'}]},
{d:'neuro',en:'cognitive decline',kata:'コグニティブ・ディクライン',ja:'認知機能低下',ex:'MCI = 軽度認知障害（ADの前段階）',deriv:[
  {t:'d',w:'cognition（認知）, cognitive（認知の）, cognitively（認知的に）'},
  {t:'r',w:'MCI（mild cognitive impairment・軽度認知障害）, dementia（認知症）'},
  {t:'a',w:'cognitive enhancement（認知機能増強）⇔ cognitive decline（認知機能低下）'}]},
{d:'neuro',en:'fMRI',kata:'エフエムアールアイ',ja:'機能的MRI（fMRI）',ex:'脳の血流変化で活動部位を可視化',deriv:[
  {t:'d',w:'functional magnetic resonance imaging（機能的磁気共鳴画像法）'},
  {t:'r',w:'BOLD signal（血中酸素レベル依存信号）, voxel（ボクセル）, ROI（関心領域）'},
  {t:'s',w:'PET（陽電子放出断層撮影）, EEG（脳波）, MEG（脳磁図）'}]},
{d:'neuro',en:'neuroinflammation',kata:'ニューロインフラメーション',ja:'神経炎症',ex:'ミクログリアの活性化による脳内炎症',deriv:[
  {t:'d',w:'neuroinflammatory（神経炎症の）'},
  {t:'r',w:'microglia（ミクログリア）, astrocyte（アストロサイト）, proinflammatory cytokine（炎症促進サイトカイン）'},
  {t:'r',w:'BBB disruption（BBB破綻）, oxidative stress（酸化ストレス）'}]},
{d:'neuro',en:'neurogenesis',kata:'ニューロジェネシス',ja:'神経新生',ex:'成人でも海馬等で新しい神経細胞が生まれる',deriv:[
  {t:'d',w:'neurogenic（神経新生の）, neurogenic niche（神経新生ニッチ）'},
  {t:'r',w:'BDNF（脳由来神経栄養因子）, SVZ（側脳室下帯）, dentate gyrus（歯状回）'},
  {t:'a',w:'neurogenesis（新生）⇔ neurodegeneration（変性）'}]},
{d:'neuro',en:'enteric nervous system',kata:'エンテリック・ナーヴァス・システム',ja:'腸管神経系',ex:'腸の神経系（第二の脳）。PDの「body-first」仮説で注目',deriv:[
  {t:'d',w:'enteric（腸の）, enteral（経腸の）'},
  {t:'s',w:'second brain（第二の脳）'},
  {t:'r',w:'gut-brain axis（腸脳軸）, vagus nerve（迷走神経）, gut microbiome（腸内細菌叢）'}]},
{d:'neuro',en:'cerebrospinal fluid',kata:'セレブロスパイナル・フルード',ja:'脳脊髄液（CSF）',ex:'CSFバイオマーカー（Aβ42・tau）はAD診断に使用',deriv:[
  {t:'d',w:'cerebrospinal（脳脊髄の）, cerebral（大脳の）, spinal（脊髄の）'},
  {t:'r',w:'lumbar puncture（腰椎穿刺・CSF採取法）, blood-brain barrier, choroid plexus（脈絡叢・CSF産生）'},
  {t:'r',w:'CSF pressure（CSF圧）, hydrocephalus（水頭症）'}]},

// ===== CAR-T =====
{d:'cart',en:'chimeric antigen receptor',kata:'キメリック・アンティジェン・レセプター',ja:'キメラ抗原受容体（CAR）',ex:'人工受容体。特定抗原を認識しT細胞を活性化',deriv:[
  {t:'d',w:'chimeric（キメラ・複数の由来を持つ）, chimera（キメラ）'},
  {t:'r',w:'scFv（single-chain variable fragment・抗原認識部位）, costimulatory domain（共刺激ドメイン）, CD3ζ（CD3ゼータ・シグナル伝達ドメイン）'},
  {t:'r',w:'1st/2nd/3rd generation CAR（第1/2/3世代CAR）'}]},
{d:'cart',en:'cytokine release syndrome',kata:'サイトカイン・リリース・シンドローム',ja:'サイトカイン放出症候群（CRS）',ex:'CAR-T療法の主要副作用。高熱・臓器障害',deriv:[
  {t:'d',w:'cytokine（サイトカイン）, release（放出する）, syndrome（症候群）'},
  {t:'s',w:'cytokine storm（サイトカインストーム）'},
  {t:'r',w:'tocilizumab（トシリズマブ・抗IL-6R抗体・CRS治療）, grading（CRSのグレード分類）, fever（発熱）'}]},
{d:'cart',en:'leukapheresis',kata:'ルーカファレーシス',ja:'白血球アフェレーシス',ex:'患者血液からT細胞を分離・採取する処置',deriv:[
  {t:'d',w:'leukocyte（白血球）+ apheresis（アフェレーシス・成分採血）'},
  {t:'r',w:'plasmapheresis（血漿交換）, plateletpheresis（血小板採取）'},
  {t:'r',w:'T cell collection（T細胞採取）, autologous（自家）'}]},
{d:'cart',en:'remission / complete remission',kata:'リミッション / コンプリート・リミッション',ja:'寛解 / 完全寛解',ex:'疾患徴候が検出限界以下になる状態',deriv:[
  {t:'d',w:'remit（寛解する）, remission（寛解）, remitting（寛解する）'},
  {t:'a',w:'relapse（再燃）, progression（進行）⇔ remission（寛解）'},
  {t:'r',w:'CR（complete remission）, PR（partial remission・部分寛解）, SD（stable disease・安定）, PD（progressive disease・進行）'}]},
{d:'cart',en:'lymphodepletion',kata:'リンファデプリーション',ja:'リンパ球除去',ex:'CAR-T投与前に化学療法でリンパ球を減らす前処置',deriv:[
  {t:'d',w:'lympho-（リンパの）, depletion（枯渇・除去）, deplete（枯渇させる）'},
  {t:'s',w:'conditioning regimen（前処置レジメン）'},
  {t:'r',w:'cyclophosphamide（シクロホスファミド）, fludarabine（フルダラビン）, engraftment（生着）'}]},
{d:'cart',en:'antigen escape',kata:'アンティジェン・エスケープ',ja:'抗原逃脱',ex:'標的抗原を失ったがん細胞がCAR-T療法を回避',deriv:[
  {t:'s',w:'immune evasion（免疫回避）, tumor escape（腫瘍逃脱）'},
  {t:'r',w:'antigen downregulation（抗原発現低下）, heterogeneity（腫瘍内不均一性）, resistance（耐性）'},
  {t:'r',w:'dual-target CAR（二重標的CAR・逃脱対策）'}]},
{d:'cart',en:'autologous',kata:'オートロガス',ja:'自家（同一個体由来）',ex:'autologous stem-cell transplantation = 自家幹細胞移植',deriv:[
  {t:'a',w:'allogeneic（同種・他の個体由来）⇔ autologous（自家・同一個体由来）'},
  {t:'r',w:'autologous CAR-T vs allogeneic CAR-T（off-the-shelf・既製品型）'},
  {t:'d',w:'auto-（自己）+ logos（理）'}]},
{d:'cart',en:'infusion',kata:'インフュージョン',ja:'点滴投与',ex:'CAR-T細胞を患者に静脈内投与する最終ステップ',deriv:[
  {t:'d',w:'infuse（点滴する）, intravenous infusion（静脈内点滴）, reinfusion（再注入）'},
  {t:'a',w:'oral administration（経口）, subcutaneous（皮下）⇔ intravenous infusion（静脈内）'},
  {t:'r',w:'infusion reaction（点滴反応）, infusion rate（点滴速度）'}]},
{d:'cart',en:'monoclonal antibody',kata:'モノクローナル・アンティボディ',ja:'モノクローナル抗体（mAb）',ex:'単一B細胞クローン由来の均一な抗体',deriv:[
  {t:'a',w:'monoclonal（単一クローン）⇔ polyclonal（多クローン）'},
  {t:'d',w:'antibody → -mab（末尾がmabの薬はモノクローナル抗体）例：nivolumab, rituximab'},
  {t:'r',w:'ADC（抗体薬物複合体）, bispecific antibody（二重特異性抗体）, humanized antibody（ヒト化抗体）'}]},
{d:'cart',en:'viral vector',kata:'ヴァイラル・ヴェクター',ja:'ウイルスベクター',ex:'CAR遺伝子をT細胞に導入する運び屋',deriv:[
  {t:'d',w:'vector（ベクター・運搬体）, vectored（ベクター使用の）'},
  {t:'r',w:'lentiviral vector（レンチウイルスベクター）, retroviral vector（レトロウイルスベクター）, adeno-associated virus（AAV）'},
  {t:'r',w:'transduction（形質導入）, gene editing（遺伝子編集）, CRISPR'}]},
{d:'cart',en:'T cell exhaustion',kata:'ティー・セル・イグゾーション',ja:'T細胞疲弊',ex:'持続的な抗原刺激でT細胞の機能が低下する状態',deriv:[
  {t:'d',w:'exhaust（疲弊させる）, exhausted（疲弊した）, exhaustion（疲弊）'},
  {t:'r',w:'PD-1（疲弊のマーカー）, TIM-3, LAG-3, checkpoint blockade（チェックポイント解除で疲弊回復）'},
  {t:'a',w:'T cell activation（活性化）⇔ T cell exhaustion（疲弊）'}]},
{d:'cart',en:'adoptive cell therapy',kata:'アドプティブ・セル・セラピー',ja:'養子細胞移植療法（ACT）',ex:'患者の細胞を体外で操作して戻す治療の総称',deriv:[
  {t:'d',w:'adoptive（養子の）, adopt（採用する・移植する）'},
  {t:'r',w:'CAR-T（キメラ抗原受容体T細胞）, TIL療法（腫瘍浸潤リンパ球）, TCR-T therapy（TCR遺伝子改変T細胞）'},
  {t:'s',w:'cell-based therapy（細胞療法）'}]},
{d:'cart',en:'persistence / durability',kata:'パーシステンス / デュラビリティ',ja:'持続性 / 耐久性',ex:'CAR-T細胞の長期的な体内残存',deriv:[
  {t:'d',w:'persist（持続する）, persistent（持続的な）, persistently（持続的に）'},
  {t:'s',w:'long-term efficacy（長期的有効性）, sustained response（持続的応答）'},
  {t:'a',w:'persistence（長期持続）⇔ T cell exhaustion（疲弊・持続性の喪失）'}]},
{d:'cart',en:'B-cell depletion',kata:'ビー・セル・デプリーション',ja:'B細胞の枯渇・除去',ex:'CAR-T療法でCD19陽性B細胞を除去。MS等の自己免疫疾患治療目的',deriv:[
  {t:'d',w:'deplete（枯渇させる）, depletion（枯渇）, depleted（枯渇した）'},
  {t:'r',w:'hypogammaglobulinemia（低ガンマグロブリン血症・B細胞枯渇の合併症）, IVIG（静注免疫グロブリン・補充療法）'},
  {t:'a',w:'B-cell depletion（除去）⇔ B-cell reconstitution（再構成）'}]},
{d:'cart',en:'solid tumor',kata:'ソリッド・テューマー',ja:'固形腫瘍',ex:'CAR-Tは血液がんで成功。固形腫瘍への応用は腫瘍微小環境が障壁',deriv:[
  {t:'a',w:'solid tumor（固形腫瘍）⇔ hematologic malignancy（血液がん・液性腫瘍）'},
  {t:'r',w:'TME（腫瘍微小環境）, immunosuppressive（免疫抑制的な）, antigen heterogeneity（抗原不均一性）'},
  {t:'d',w:'tumor（腫瘍）, neoplasm（新生物）, carcinoma（癌腫）, sarcoma（肉腫）'}]},
{d:'cart',en:'off-target toxicity',kata:'オフ・ターゲット・トクシシティ',ja:'標的外毒性',ex:'標的抗原が正常組織にも発現していた場合の副作用',deriv:[
  {t:'a',w:'on-target/on-tumor（意図した標的）⇔ on-target/off-tumor（正常組織の標的抗原）⇔ off-target（全く別の標的）'},
  {t:'r',w:'antigen selection（標的抗原の選択）, tumor-associated antigen（腫瘍関連抗原）'},
  {t:'d',w:'target（標的）, off-target（標的外）, toxicity（毒性）'}]},
{d:'cart',en:'bispecific T-cell engager',kata:'バイスペシフィック・ティー・セル・エンゲイジャー',ja:'二重特異性T細胞エンゲージャー（BiTE）',ex:'1つの抗体がCD3（T細胞）とがん抗原を同時に結合',deriv:[
  {t:'d',w:'bispecific（二重特異性の）, engager（エンゲージャー）'},
  {t:'r',w:'blinatumomab（ブリナツモマブ・初の承認BiTE）, CD3×CD19 BiTE'},
  {t:'r',w:'trispecific（三重特異性）antibody, multispecific（多重特異性）antibody'}]},
{d:'cart',en:'immune reconstitution',kata:'イミューン・リコンスティテューション',ja:'免疫再構成',ex:'CAR-T療法後のB細胞枯渇後に免疫系が回復するプロセス',deriv:[
  {t:'d',w:'reconstitute（再構成する）, reconstitution（再構成）'},
  {t:'r',w:'IVIG（免疫グロブリン補充）, monitoring（モニタリング）, infection risk（感染リスク）'},
  {t:'s',w:'immune recovery, immune restoration（免疫回復）'}]},

// ===== MNP =====
{d:'mnp',en:'microplastics / nanoplastics',kata:'マイクロプラスティクス / ナノプラスティクス',ja:'マイクロ/ナノプラスチック（MNPs）',ex:'5mm以下がMPs、1μm以下がNPs',deriv:[
  {t:'d',w:'micro-（マイクロ・100万分の1）, nano-（ナノ・10億分の1）'},
  {t:'r',w:'primary MNPs（一次性）, secondary MNPs（二次性・大型プラスチックの分解産物）'},
  {t:'r',w:'plastic pollution（プラスチック汚染）, bioaccumulation（生体蓄積）'}]},
{d:'mnp',en:'ubiquitous',kata:'ユービクィタス',ja:'至る所に存在する',ex:'MNPs are ubiquitous in the environment',deriv:[
  {t:'d',w:'ubiquity（遍在）, ubiquitously（至る所に）'},
  {t:'s',w:'pervasive（広く普及した）, omnipresent（遍在する）, widespread（広範な）'},
  {t:'a',w:'rare（稀な）, localized（局在する）, absent（存在しない）'}]},
{d:'mnp',en:'bioaccumulation',kata:'バイオアキュムレーション',ja:'生体蓄積',ex:'biomagnification = 食物連鎖の上位ほど濃度が高まる',deriv:[
  {t:'d',w:'accumulate（蓄積する）, accumulation（蓄積）, bioaccumulate（生体蓄積する）'},
  {t:'s',w:'biomagnification（生物濃縮）, bioaccessibility（生体利用可能性）'},
  {t:'r',w:'half-life（半減期）, persistence（残留性）, lipophilicity（脂溶性・生体蓄積と相関）'}]},
{d:'mnp',en:'endocrine disruptor',kata:'エンドクリン・ディスラプター',ja:'内分泌かく乱物質',ex:'BPA・フタル酸エステル。ホルモン様作用',deriv:[
  {t:'d',w:'endocrine（内分泌の）, disrupt（かく乱する）, disruption（かく乱）'},
  {t:'s',w:'hormone disruptor, environmental estrogen（環境エストロゲン）'},
  {t:'r',w:'bisphenol A（BPA）, phthalate（フタル酸エステル）, xenoestrogen（外来エストロゲン）'}]},
{d:'mnp',en:'genotoxicity',kata:'ジェノトクシシティ',ja:'遺伝毒性',ex:'DNAを直接傷つける毒性。発がん性と密接に関連',deriv:[
  {t:'d',w:'genotoxic（遺伝毒性の）, genotoxin（遺伝毒素）'},
  {t:'r',w:'carcinogenicity（発がん性）, mutagenicity（変異原性）, Ames test（エームス試験・変異原性検定）'},
  {t:'a',w:'cytotoxicity（細胞毒性・直接的細胞死）vs genotoxicity（DNA損傷）'}]},
{d:'mnp',en:'ingestion / inhalation / dermal exposure',kata:'インジェスチョン / インハレーション / ダーマル',ja:'経口摂取 / 吸入 / 経皮曝露',ex:'R7 1-2月 問I-2 で3つの体内侵入経路として出題',deriv:[
  {t:'d',w:'ingest（摂取する）, ingested（摂取された）, inhale（吸入する）, inhalation（吸入）'},
  {t:'r',w:'route of exposure（曝露経路）, absorption（吸収）, distribution（分布）'},
  {t:'r',w:'oral route（経口）, respiratory route（経気道）, transdermal route（経皮）'}]},
{d:'mnp',en:'inflammatory bowel disease',kata:'インフラマトリー・バウエル・ディジーズ',ja:'炎症性腸疾患（IBD）',ex:'クローン病・潰瘍性大腸炎。MNPs経口摂取と関連が示唆',deriv:[
  {t:'d',w:'inflammatory（炎症性の）, bowel（腸）, intestinal（腸の）'},
  {t:'r',w:"Crohn's disease（クローン病）, ulcerative colitis（潰瘍性大腸炎）, IBS（過敏性腸症候群・非炎症性）"},
  {t:'r',w:'gut microbiome（腸内細菌叢）, dysbiosis（菌叢異常）, intestinal permeability（腸管透過性）'}]},
{d:'mnp',en:'placental transfer',kata:'プラセンタル・トランスファー',ja:'胎盤移行',ex:'MNPsが胎盤を通過して胎児に到達することが示唆',deriv:[
  {t:'d',w:'placenta（胎盤）, placental（胎盤の）, transplacental（経胎盤の）'},
  {t:'r',w:'fetal exposure（胎児曝露）, cord blood（臍帯血）, developmental toxicity（発達毒性）'},
  {t:'r',w:'transgenerational effect（世代を超えた影響）'}]},
{d:'mnp',en:'leaching',kata:'リーチング',ja:'溶出',ex:'プラスチック容器からMNPsや添加物が液体に溶け出す',deriv:[
  {t:'d',w:'leach（溶出する・浸出する）, leachate（浸出液）'},
  {t:'s',w:'migration（移行）, extraction（抽出）'},
  {t:'r',w:'BPA leaching from polycarbonate（ポリカーボネートからのBPA溶出）, food packaging（食品包装）'}]},
{d:'mnp',en:'precautionary principle',kata:'プリコーショナリー・プリンシプル',ja:'予防原則',ex:'十分なエビデンスがなくても予防的規制を行う原則',deriv:[
  {t:'d',w:'precaution（予防措置）, precautionary（予防的な）, cautious（慎重な）'},
  {t:'r',w:'risk assessment（リスク評価）, regulatory policy（規制政策）, burden of proof（立証責任）'},
  {t:'s',w:'better safe than sorry principle（予防的配慮）'}]},
{d:'mnp',en:'oxidative damage',kata:'オキシデイティブ・ダメージ',ja:'酸化的損傷',ex:'ROS産生増加によるDNA・細胞への損傷',deriv:[
  {t:'d',w:'oxidize（酸化する）, oxidative（酸化的な）, oxidized（酸化された）'},
  {t:'s',w:'oxidative stress（酸化ストレス）'},
  {t:'r',w:'lipid peroxidation（脂質過酸化）, 8-OHdG（DNA酸化損傷マーカー）, antioxidant（抗酸化物質）'}]},
{d:'mnp',en:'exposure assessment',kata:'エクスポージャー・アセスメント',ja:'曝露評価',ex:'どれだけの量のMNPsに曝露しているかを定量的に評価',deriv:[
  {t:'d',w:'expose（曝露する）, exposure（曝露・接触）, exposed（曝露された）'},
  {t:'r',w:'biomonitoring（生体モニタリング）, dose reconstruction（用量再構築）, cumulative exposure（累積曝露）'},
  {t:'a',w:'unexposed（非曝露）⇔ exposed（曝露）'}]},
{d:'mnp',en:'dysbiosis',kata:'ディスバイオーシス',ja:'腸内細菌叢の異常',ex:'腸内細菌叢のバランスが崩れた状態。MNPs・神経疾患と関連',deriv:[
  {t:'a',w:'eubiosis（健康な腸内細菌叢）⇔ dysbiosis（異常な腸内細菌叢）'},
  {t:'d',w:'dys-（異常）+ biosis（生物との共存）'},
  {t:'r',w:'gut microbiome（腸内細菌叢）, Firmicutes/Bacteroidetes ratio（腸内細菌の比率）, probiotics（プロバイオティクス）'}]},
{d:'mnp',en:'bioaccumulation / biomagnification',kata:'バイオアキュムレーション / バイオマグニフィケーション',ja:'生体蓄積 / 生物濃縮',ex:'食物連鎖の上位ほど濃度が高まる',deriv:[
  {t:'a',w:'bioaccumulation（個体内蓄積）⇔ biodegradation（生分解）'},
  {t:'r',w:'persistent organic pollutant（POPs・残留性有機汚染物質）, trophic level（栄養段階）'},
  {t:'r',w:'DDT（農薬・生物濃縮の古典的例）, PCB（ポリ塩化ビフェニル）'}]},
{d:'mnp',en:'detrimental',kata:'デトリメンタル',ja:'有害な（R7試験注釈語）',ex:'R7試験の注釈。harmful の同義語',deriv:[
  {t:'d',w:'detriment（害・損害）, detrimentally（有害に）'},
  {t:'s',w:'harmful（有害な）, deleterious（有害な）, injurious（傷害的な）, adverse（不利な）'},
  {t:'a',w:'beneficial（有益な）, advantageous（有利な）'}]},
{d:'mnp',en:'cardiovascular disease',kata:'カーディオヴァスキュラー・ディジーズ',ja:'心血管疾患（CVD）',ex:'MNPsと関連が示唆。動脈硬化プラークからMNPs検出',deriv:[
  {t:'d',w:'cardiovascular（心血管の）, cardiac（心臓の）, vascular（血管の）'},
  {t:'r',w:'atherosclerosis（動脈硬化）, myocardial infarction（心筋梗塞）, stroke（脳卒中）'},
  {t:'r',w:'risk factor（危険因子）: hypertension, dyslipidemia, diabetes, smoking'}]},
{d:'mnp',en:'nanoscale',kata:'ナノスケール',ja:'ナノスケール（nm級）',ex:'1nm = 10⁻⁹m。ナノプラスチックはBBBを通過する可能性',deriv:[
  {t:'d',w:'nano-（ナノ・10億分の1）, nanotechnology（ナノテクノロジー）, nanoparticle（ナノ粒子）'},
  {t:'r',w:'nanomedicine（ナノ医療）, drug delivery nanoparticle（薬物送達ナノ粒子）'},
  {t:'r',w:'liposome（リポソーム）, quantum dot（量子ドット）, dendrimer（デンドリマー）'}]},
{d:'mnp',en:'abrasion',kata:'アブレイジョン',ja:'摩耗（R7試験注釈語）',ex:'R7試験の注釈。タイヤ摩耗がMNPs発生源',deriv:[
  {t:'d',w:'abrade（摩耗する・擦り傷をつける）, abrasive（摩耗性の・研磨の）'},
  {t:'s',w:'wear and tear（磨耗）, friction（摩擦）, erosion（侵食）'},
  {t:'r',w:'tire abrasion（タイヤ摩耗）, microplastic generation（マイクロプラスチック生成）'}]},

// ===== EVOLUTION =====
{d:'evolution',en:'natural selection',kata:'ナチュラル・セレクション',ja:'自然選択',ex:'生存・繁殖に有利な遺伝的特徴が集団に広がる進化の原理',deriv:[
  {t:'d',w:'select（選択する）, selective（選択的な）, selection pressure（選択圧）'},
  {t:'s',w:'Darwinian selection（ダーウィン的選択）, survival of the fittest（適者生存）'},
  {t:'r',w:'genetic drift（遺伝的浮動）, mutation（変異）, migration（移住）, gene flow（遺伝子流動）'}]},
{d:'evolution',en:'selective pressure',kata:'セレクティブ・プレッシャー',ja:'選択圧',ex:'黒死病のような疫病が強力な選択圧をかけ遺伝子頻度を変化させた',deriv:[
  {t:'d',w:'selective（選択的な）, pressure（圧力）, selection coefficient（選択係数）'},
  {t:'r',w:'fitness（適応度）, adaptive evolution（適応進化）, purifying selection（浄化選択）'},
  {t:'a',w:'positive selection（正の選択・有利なアレルの増加）⇔ negative selection（負の選択・有害なアレルの除去）'}]},
{d:'evolution',en:'ancient DNA',kata:'エインシェント・ディーエヌエー',ja:'古代DNA（aDNA）',ex:'遺骨・歯から抽出した古いDNA。Klunk et al.の研究手法',deriv:[
  {t:'d',w:'ancient（古代の）, paleogenomics（古代ゲノミクス）, palaeogenetics（古代遺伝学）'},
  {t:'r',w:'museum specimens（博物館標本）, radiocarbon dating（放射性炭素年代測定）, contamination（コンタミネーション・古代DNA研究の課題）'},
  {t:'s',w:'archaeogenomics（考古ゲノミクス）'}]},
{d:'evolution',en:'allele frequency',kata:'アリール・フリークエンシー',ja:'アレル頻度',ex:'黒死病前後でアレル頻度が有意に変化',deriv:[
  {t:'d',w:'allele（対立遺伝子）, frequency（頻度）, allelic（アレル的な）'},
  {t:'r',w:'Hardy-Weinberg equilibrium（ハーディ・ワインベルク平衡）, drift（遺伝的浮動）'},
  {t:'a',w:'common variant（頻度の高い変異）⇔ rare variant（頻度の低い変異）'}]},
{d:'evolution',en:'pandemic / epidemic / endemic',kata:'パンデミック / エピデミック / エンデミック',ja:'世界的流行 / 流行 / 常在',ex:'pandemic > epidemic > endemic',deriv:[
  {t:'d',w:'pandemic（pan = 全部・demic = 人）, epidemic（epi = 上に）, endemic（en = 中に）'},
  {t:'r',w:'outbreak（アウトブレーク）, R0（基本再生産数）, case fatality rate（致命率）'},
  {t:'r',w:'zoonosis（人獣共通感染症）, spillover（溢出）'}]},
{d:'evolution',en:'trade-off / pleiotropic effect',kata:'トレードオフ / プレイオトロピック',ja:'トレードオフ / 多面発現効果',ex:'ペスト耐性遺伝子が現代の自己免疫疾患リスクを高める',deriv:[
  {t:'d',w:'pleiotropic（多面発現の）, pleiotropy（多面発現）'},
  {t:'r',w:'antagonistic pleiotropy（拮抗的多面発現・老化の進化理論）, evolutionary mismatch（進化的ミスマッチ）'},
  {t:'s',w:'constraint（制約）, compromise（妥協）'}]},
{d:'evolution',en:'GWAS',kata:'ジーワス',ja:'ゲノムワイド関連解析（GWAS）',ex:'ゲノム全体でSNPと疾患の関連を調べる',deriv:[
  {t:'d',w:'genome-wide（ゲノム全体の）, association（関連）, genotype（遺伝子型）'},
  {t:'r',w:'SNP chip（SNPアレイ）, Manhattan plot（マンハッタンプロット）, p < 5×10⁻⁸（GWAS有意閾値）'},
  {t:'r',w:'polygenic risk score（PRS・多遺伝子リスクスコア）'}]},
{d:'evolution',en:'selective sweep',kata:'セレクティブ・スウィープ',ja:'選択的一掃',ex:'正の選択を受けた変異の周辺が集団から急速に広がる',deriv:[
  {t:'d',w:'sweep（一掃する）, hard sweep（ハード一掃・単一変異）, soft sweep（ソフト一掃・複数変異）'},
  {t:'r',w:'linkage disequilibrium（連鎖不平衡）, haplotype（ハプロタイプ）'},
  {t:'s',w:'positive selection signal（正の選択シグナル）'}]},
{d:'evolution',en:'SNP',kata:'スニップ',ja:'一塩基多型（SNP）',ex:'ゲノム中の1塩基の変異。GWAS・aDNA研究の基本単位',deriv:[
  {t:'d',w:'SNP = single nucleotide polymorphism。polymorphic（多型の）'},
  {t:'r',w:'genotyping（遺伝子型決定）, imputation（補完）, tagging SNP（タギングSNP）'},
  {t:'a',w:'common SNP（頻度≥1%）⇔ rare variant（頻度<1%）'}]},
{d:'evolution',en:'survivor bias',kata:'サーバイバー・バイアス',ja:'生存者バイアス',ex:'生き残った個体のみを分析することで生じる偏り',deriv:[
  {t:'d',w:'survivor（生存者）, bias（偏り）, biased（偏った）'},
  {t:'s',w:'selection bias（選択バイアス）, ascertainment bias（同定バイアス）'},
  {t:'r',w:'competing risks（競合リスク）, censoring（打ち切り）'}]},
{d:'evolution',en:'evolutionary mismatch',kata:'エボリューショナリー・ミスマッチ',ja:'進化的ミスマッチ',ex:'過去の環境で有利だった特性が現代環境では不利となる現象',deriv:[
  {t:'d',w:'mismatch（不一致）, mismatch hypothesis（ミスマッチ仮説）'},
  {t:'s',w:'evolutionary discordance（進化的不一致）'},
  {t:'r',w:'modern lifestyle diseases（現代生活習慣病）, obesity（肥満）, metabolic syndrome（メタボリックシンドローム）'}]},
{d:'evolution',en:'population genetics',kata:'ポピュレーション・ジェネティクス',ja:'集団遺伝学',ex:'集団内のアレル頻度変化を研究する遺伝学の分野',deriv:[
  {t:'d',w:'genetic（遺伝の）, genetics（遺伝学）, geneticist（遺伝学者）'},
  {t:'r',w:'effective population size（有効集団サイズ）, bottleneck（ボトルネック）, founder effect（創始者効果）'},
  {t:'r',w:'FST（集団間の遺伝的分化指標）, coalescence（系譜合一）'}]},
{d:'evolution',en:'molecular clock',kata:'モレキュラー・クロック',ja:'分子時計',ex:'DNAの変異速度から進化時間・分岐年代を推定',deriv:[
  {t:'d',w:'molecular（分子の）, clock（時計）, molecular evolution（分子進化）'},
  {t:'r',w:'mutation rate（変異率）, divergence time（分岐年代）, phylogenetics（系統学）'},
  {t:'r',w:'Bayesian molecular clock（ベイズ分子時計）'}]},
{d:'evolution',en:'rheumatoid arthritis',kata:'ルーマトイド・アースライティス',ja:'関節リウマチ（R7試験注釈語）',ex:'R7試験の注釈。ペスト耐性遺伝子との関連が示唆',deriv:[
  {t:'d',w:'rheumatoid（リウマチ様の）, arthritis（関節炎）, articular（関節の）'},
  {t:'r',w:'anti-CCP antibody（抗CCP抗体・RAマーカー）, RF（リウマトイド因子）, TNF inhibitor（TNF阻害薬）'},
  {t:'s',w:'inflammatory arthritis（炎症性関節炎）, polyarthritis（多発性関節炎）'}]},
{d:'evolution',en:'pathogen-host coevolution',kata:'パソジェン・ホスト・コーエボリューション',ja:'病原体-宿主の共進化',ex:'病原体と宿主が互いに適応しながら進化する関係',deriv:[
  {t:'d',w:'coevolve（共進化する）, coevolution（共進化）'},
  {t:'r',w:'arms race（軍拡競争・病原体vs宿主）, Red Queen hypothesis（赤の女王仮説）'},
  {t:'s',w:'antagonistic coevolution（拮抗的共進化）'}]},
{d:'evolution',en:'bubonic plague',kata:'ビューボニック・プレイグ',ja:'腺ペスト（黒死病）',ex:'14世紀ヨーロッパで死者3000〜5000万人',deriv:[
  {t:'d',w:'bubonic（腺の・鼠径部の）, plague（ペスト・疫病）, plagues（複数）'},
  {t:'r',w:'pneumonic plague（肺ペスト）, septicemic plague（敗血症ペスト）, Yersinia pestis（ペスト菌）'},
  {t:'r',w:'flea vector（ノミを媒介した伝播）, rat reservoir（ネズミを宿主とする）'}]},
{d:'evolution',en:'longitudinal study',kata:'ロンジチュードナル・スタディ',ja:'縦断研究',ex:'Klunk et al.：黒死病前後の時系列でアレル頻度を比較',deriv:[
  {t:'d',w:'longitudinal（縦断的な）, longitude（経度・長さ方向）'},
  {t:'a',w:'longitudinal study（縦断研究・同一集団を追跡）⇔ cross-sectional study（横断研究・時点での観察）'},
  {t:'r',w:'follow-up（追跡）, cohort（コホート）, attrition（脱落）'}]},
{d:'evolution',en:'natural selection evidence',kata:'ナチュラル・セレクション・エビデンス',ja:'自然選択の証拠',ex:'古代DNA・アレル頻度変化・selective sweepが証拠として機能',deriv:[
  {t:'r',w:'Fst（集団間遺伝的分化）, iHS（integrated haplotype score）, XP-EHH（選択シグナル統計）'},
  {t:'r',w:'positive selection（正の選択）, purifying selection（浄化選択）, balancing selection（平衡選択）'}]},

// ===== PAPER =====
{d:'paper',en:'hypothesis',kata:'ハイポセシス',ja:'仮説',ex:'We hypothesize that... = Introductionの核心',deriv:[
  {t:'d',w:'hypothesize（仮説を立てる）, hypothetical（仮説の）, hypothesis-driven（仮説駆動型の）'},
  {t:'s',w:'assumption（仮定）, conjecture（推測）, postulate（前提）'},
  {t:'a',w:'null hypothesis（帰無仮説）⇔ alternative hypothesis（対立仮説）'}]},
{d:'paper',en:'demonstrate',kata:'デモンストレイト',ja:'証明する',ex:'These results demonstrate that... = Resultsセクション頻出',deriv:[
  {t:'d',w:'demonstration（証明・実演）, demonstrable（証明可能な）'},
  {t:'s',w:'prove（証明する）, establish（確立する）, show（示す）, reveal（明らかにする）'},
  {t:'r',w:'suggest（示唆する・weaker）, indicate（示す）→ demonstrate（最強）'}]},
{d:'paper',en:'suggest / indicate',kata:'サジェスト / インディケイト',ja:'示唆する / 示す',ex:'確信度：demonstrate > show > indicate > suggest > imply',deriv:[
  {t:'d',w:'suggestion（示唆）, indication（指標・示唆）, implication（含意）'},
  {t:'s',w:'imply（含意する）, hint（ほのめかす）, point to（〜を指し示す）'},
  {t:'r',w:'strong evidence（強い証拠）=demonstrate。weak/preliminary evidence（弱い証拠）=suggest'}]},
{d:'paper',en:'robust',kata:'ロバスト',ja:'確実な・信頼性の高い',ex:'robust evidence = 確実なエビデンス（R7 Q16の語彙問題）',deriv:[
  {t:'s',w:'strong, reliable（信頼性の高い）, reproducible（再現可能な）, consistent（一貫した）'},
  {t:'a',w:'fragile（脆弱な）, weak（弱い）, inconsistent（一貫しない）, preliminary（予備的な）'},
  {t:'d',w:'robustness（堅牢性）, robustly（確実に）'}]},
{d:'paper',en:'limitation',kata:'リミテーション',ja:'限界・制限',ex:'a major limitation of this study is... = Discussionの定型表現',deriv:[
  {t:'d',w:'limit（制限する）, limited（限られた）, limiting（制限的な）'},
  {t:'s',w:'constraint（制約）, caveat（注意事項）, shortcoming（欠点）'},
  {t:'a',w:'strength（強み）⇔ limitation（限界）'}]},
{d:'paper',en:'novel',kata:'ノヴェル',ja:'新規の・斬新な',ex:'a novel approach = 新しいアプローチ。Nature論文頻出',deriv:[
  {t:'d',w:'novelty（新規性）, innovative（革新的な）'},
  {t:'s',w:'innovative（革新的な）, original（独創的な）, pioneering（先駆的な）, unprecedented（前例のない）'},
  {t:'a',w:'novel（新規）⇔ conventional（従来の）, established（確立された）'}]},
{d:'paper',en:'despite',kata:'ディスパイト',ja:'〜にもかかわらず（逆接）',ex:'R7 8月タイトル "Despite a strong workforce" として出題',deriv:[
  {t:'s',w:'although, even though, in spite of, notwithstanding（〜にもかかわらず）'},
  {t:'a',w:'because（なぜなら）, therefore（したがって）⇔ despite（逆接）'},
  {t:'r',w:'however, nevertheless, yet（しかし・逆接）'}]},
{d:'paper',en:'elucidate',kata:'イルーシデイト',ja:'解明する',ex:'to elucidate the mechanism = メカニズムを解明する',deriv:[
  {t:'d',w:'elucidation（解明）, elucidatory（解明的な）'},
  {t:'s',w:'clarify（明確にする）, illuminate（照らし出す）, explain（説明する）, uncover（明かす）'},
  {t:'r',w:'shed light on（〜に光を当てる）= 同義のイディオム'}]},
{d:'paper',en:'implication',kata:'インプリケーション',ja:'含意・意味合い',ex:'the implications of this finding = この発見の意味するところ',deriv:[
  {t:'d',w:'imply（含意する）, implied（暗示された）, implicit（暗黙の）'},
  {t:'s',w:'consequence（結果）, significance（意義）, impact（影響）, ramification（波及効果）'},
  {t:'a',w:'explicit（明示的）⇔ implicit/implied（暗示的）'}]},
{d:'paper',en:'consensus',kata:'コンセンサス',ja:'コンセンサス・合意',ex:'the scientific consensus vs controversial findings（論争的な発見）',deriv:[
  {t:'d',w:'consensus → consensus statement（合意声明）, consensus guideline（合意ガイドライン）'},
  {t:'s',w:'agreement（同意）, accord（合意）'},
  {t:'a',w:'consensus（合意）⇔ controversy / dissent（論争・異議）'}]},
{d:'paper',en:'statistically significant',kata:'スタティスティカリー・シグニフィカント',ja:'統計的に有意な',ex:'p < 0.05が基準。臨床的意義とは別物',deriv:[
  {t:'d',w:'significance（有意性）, significantly（有意に）, non-significant（有意でない・NS）'},
  {t:'a',w:'statistically significant（統計的有意）⇔ clinically significant（臨床的意義あり）'},
  {t:'r',w:'p-value（p値）, type I error（第一種の誤り・偽陽性）, type II error（第二種の誤り・偽陰性）'}]},
{d:'paper',en:'gold standard',kata:'ゴールド・スタンダード',ja:'ゴールドスタンダード（標準法）',ex:'RCT = 有効性証明のgold standard',deriv:[
  {t:'s',w:'criterion standard（基準標準）, reference standard（参照標準）'},
  {t:'r',w:'benchmark（ベンチマーク）, state-of-the-art（最先端）'},
  {t:'r',w:'PCR = gold standard for infection diagnosis（感染症診断）, RCT = gold standard for efficacy'}]},
{d:'paper',en:'confounding',kata:'コンファウンディング',ja:'交絡',ex:'曝露と結果の両方と関連し真の因果関係を歪める変数',deriv:[
  {t:'d',w:'confound（交絡させる）, confounder（交絡因子）, confounded（交絡した）'},
  {t:'r',w:'stratification（層別化）, multivariable analysis（多変量解析）, propensity score matching（傾向スコアマッチング）'},
  {t:'a',w:'confounding（交絡・偽の関連）⇔ effect modification（真の交互作用）'}]},
{d:'paper',en:'prospective / retrospective',kata:'プロスペクティブ / レトロスペクティブ',ja:'前向き / 後ろ向き（研究）',ex:'RCT・コホート = 前向き。症例対照 = 後ろ向き',deriv:[
  {t:'a',w:'prospective（前向き・将来を追跡）⇔ retrospective（後ろ向き・過去を遡る）'},
  {t:'d',w:'prospect（展望）, retrospect（回顧）, perspective（視点）'},
  {t:'r',w:'longitudinal（縦断的）, real-world evidence（実臨床データ）'}]},
{d:'paper',en:'meta-analysis',kata:'メタ・アナリシス',ja:'メタ解析',ex:'複数研究を統合。エビデンス階層の最上位',deriv:[
  {t:'d',w:'meta-（超える・超越した）, analyse（分析する）, meta-analytic（メタ解析の）'},
  {t:'s',w:'systematic review（系統的レビュー）, pooled analysis（統合解析）'},
  {t:'r',w:'heterogeneity I²（異質性指標）, forest plot（フォレストプロット）, Cochrane review（コクランレビュー）'}]},
{d:'paper',en:'warranted',kata:'ウォーランティド',ja:'正当化される',ex:'further research is warranted = さらなる研究が求められる',deriv:[
  {t:'d',w:'warrant（正当化する・保証する）, warranty（保証）, warranting（正当化する）'},
  {t:'s',w:'justified（正当化された）, called for（要求される）, needed（必要な）'},
  {t:'r',w:'future work is needed, further investigation is required（論文末尾の定型表現）'}]},
{d:'paper',en:'onerous',kata:'オーネラス',ja:'厄介な・重荷となる（R7試験注釈語）',ex:'R7 8月試験の注釈。burdensome の同義語',deriv:[
  {t:'s',w:'burdensome（重荷の）, arduous（骨の折れる）, cumbersome（扱いにくい）, taxing（骨の折れる）'},
  {t:'a',w:'manageable（処理可能な）, easy（簡単な）, straightforward（簡単な）'},
  {t:'d',w:'onus（義務・責任）, onerous duty（重い義務）'}]},
{d:'paper',en:'autonomy',kata:'オートノミー',ja:'自律性（R7試験注釈語）',ex:'R7 8月試験の注釈。researcher autonomy = 研究者の自律性',deriv:[
  {t:'d',w:'autonomous（自律的な）, autonomously（自律的に）'},
  {t:'s',w:'independence（独立性）, self-governance（自治）, self-determination（自己決定）'},
  {t:'a',w:'heteronomy（他律性）⇔ autonomy（自律性）, dependence（依存）'}]},
{d:'paper',en:'counterproductive',kata:'カウンタープロダクティブ',ja:'逆効果の（R7試験注釈語）',ex:'R7 8月試験の注釈。having the opposite of the intended effect',deriv:[
  {t:'d',w:'counter-（反対・対抗）+ productive（生産的な）'},
  {t:'s',w:'self-defeating（自滅的な）, backfiring（逆効果になる）'},
  {t:'a',w:'productive（生産的な）, effective（有効な）⇔ counterproductive（逆効果の）'}]},
{d:'paper',en:'emerging evidence',kata:'エマージング・エビデンス',ja:'新たなエビデンス',ex:'emerging evidence suggests that... = 最新の知見は〜を示唆する',deriv:[
  {t:'d',w:'emerge（出現する）, emerging（出現しつつある）, emergence（出現）'},
  {t:'r',w:'growing body of evidence（蓄積されるエビデンス）, accumulating evidence（積み重なるエビデンス）'},
  {t:'a',w:'established evidence（確立されたエビデンス）⇔ emerging evidence（新たな証拠）'}]},
{d:'paper',en:'causal / causality',kata:'コーザル / コーザリティ',ja:'因果的な / 因果関係',ex:'establishing causality ≠ correlation（相関）',deriv:[
  {t:'d',w:'cause（原因）, causation（因果関係）, causal inference（因果推論）'},
  {t:'a',w:'correlation（相関）⇔ causation（因果）— "correlation does not imply causation"（相関は因果を示さない）'},
  {t:'r',w:'Bradford Hill criteria（ブラッドフォードヒル基準・因果関係の判断基準）'}]},
{d:'paper',en:'hazard ratio',kata:'ハザード・レーシオ',ja:'ハザード比（HR）',ex:'生存分析で使用。HR < 1 = 治療群のリスク減少',deriv:[
  {t:'d',w:'hazard（危険・ハザード率）, hazard function（ハザード関数）'},
  {t:'s',w:'risk ratio（RR）, rate ratio（率比）'},
  {t:'r',w:'Kaplan-Meier curve（カプランマイヤー曲線）, Cox proportional hazards model（コックス比例ハザードモデル）, log-rank test（ログランク検定）'}]},
{d:'paper',en:'intention-to-treat',kata:'インテンション・トゥ・トリート',ja:'治療意図解析（ITT）',ex:'割り付け通りに解析。脱落バイアスを防ぐRCTの標準解析法',deriv:[
  {t:'a',w:'ITT（intention-to-treat・全例解析）⇔ per-protocol analysis（PP解析・プロトコル通り完了した例のみ）'},
  {t:'r',w:'missing data（欠損値）, imputation（補完）, dropout（脱落）'},
  {t:'d',w:'intention（意図）, treat（治療する）'}]},
{d:'paper',en:'sensitivity analysis',kata:'センシティビティ・アナリシス',ja:'感度分析',ex:'仮定・方法を変えても結論が変わらないか確認',deriv:[
  {t:'d',w:'sensitive（感受性の高い）, sensitivity（感度・感受性）'},
  {t:'r',w:'robustness check（頑健性確認）, subgroup analysis（サブグループ解析）'},
  {t:'s',w:'scenario analysis（シナリオ分析）, stress test（ストレステスト）'}]},
{d:'paper',en:'in contrast / whereas',kata:'イン・コントラスト / ウェアリアズ',ja:'対照的に / 一方〜であるのに対し',ex:'比較・対比型の設問の解答で必須の接続表現',deriv:[
  {t:'s',w:'on the other hand（一方）, conversely（逆に）, by contrast（対照的に）, however（しかし）'},
  {t:'r',w:'compared to/with（〜と比較して）, unlike（〜とは異なり）, in opposition to（〜に対して）'},
  {t:'d',w:'contrast（対比）, contrastingly（対照的に）, contrasting（対照的な）'}]},
{d:'paper',en:'dose-response relationship',kata:'ドース・レスポンス',ja:'用量反応関係',ex:'用量が増えるほど効果/副作用が増加。因果関係の証拠のひとつ',deriv:[
  {t:'d',w:'dose（用量）, dosing regimen（投与計画）, underdose（過少投与）, overdose（過剰投与）'},
  {t:'r',w:'therapeutic window（治療域）, EC50（50%有効濃度）, IC50（50%阻害濃度）, LD50（50%致死量）'},
  {t:'a',w:'dose-dependent（用量依存的）⇔ dose-independent / non-linear（非線形）'}]},
{d:'paper',en:'contentious',kata:'コンテンシャス',ja:'議論の余地がある（模擬試験注釈語）',ex:'模擬試験Iで注釈語として出題。controversial の同義語',deriv:[
  {t:'s',w:'controversial（論争的な）, disputed（異論のある）, debatable（議論の余地がある）'},
  {t:'a',w:'uncontroversial（異論のない）, settled（確定した）, established（確立した）'},
  {t:'d',w:'contention（論争）, contend（主張する）'}]},
];
const DECK_LABELS={all:'全て',basics:'基礎・汎用',immune:'免疫学',neuro:'神経科学',cart:'CAR-T',mnp:'MNP・環境医学',evolution:'進化・遺伝',paper:'論文表現'};
const TAG_LABEL={d:'派生語',s:'類義語',a:'反対語',r:'関連語'};
